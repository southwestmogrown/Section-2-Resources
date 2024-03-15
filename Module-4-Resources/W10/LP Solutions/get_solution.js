#!/usr/bin/env node

// Given 1) the name of a project starter repo or 2) the relative path of a
// project on mcp/mca, this script will report the encoded filename on S3,
// report the full URL, download the project solution zip from S3 to an
// appropriately named file in the current directory, and/or download the
// autograder solution zip from S3 to the current directory.

// (The resulting .zip's filename will be the name of the starter repo (minus
// the "practice-for" prefix on old starter repos).

// When downloading, the script will overwrite a file with the same name.

// To install the script in your executable PATH, cd into your local
// __get_solution__ directory (where the __package.json__ is) and run

// `npm install && npm link`

// To use the installed script, simply run

// `get_solution` (for a prompt) OR
// `get_solution <starter-repo-name> ...` OR
// `get_solution <relative-path-of-project> ...`

// Examples:

// `get_solution` (will prompt for path)
// `get_solution practice-for-ch-mern-twitter`
// `get_solution ch-mern/practices/twitter`
// `get_solution FT04/version-a/projects/week-3-unit-test-problems-solution`

// You can also include multiple projects on the command line or at the prompt,
// e.g.,

// `get_solution practice-for-ch-mern-twitter assessment-for-prepwork-version-a-css`

// Beginning with GitHub App 2.0, the names of the created starter repos and
// solution files have a different format. By default, the script will locate
// the new solution file name when given a relative path; to obtain the original
// solution file name instead, use the `-o` flag on the command line.

// The new naming structure also appends a program abbreviation (e.g., `-ch`,
// `-ft`, `-pt`) to every solution file. You can similarly append the desired
// program when listing projects on the command line--e.g.,
// `aa-js-asteroids-ch`-- or use the `-p` flag to set the desired program for
// all projects:

// `get_solution aa-js-asteroids -p ch`

// The script will prompt you to enter the program for any project that does not
// have one set. (This does not apply when seeking the old/original solution
// file names.)

// The script supports the following flags/options:

//   -V, --version      output the version number
//   -d, --download     Download the solution .zip file(s)
//   -a, --autograder   Download the autograder solution .zip file(s)
//   -o, --original     Use original repo naming structure
//   -p, --program      Specify the program (ch, ft, or pt)
//   -t, --testOrg      Get solution for the app-academy-test GitHub org
//   -N, --no-filename  Skip displaying a solution's encoded filename
//   -U, --no-url       Skip displaying a solution's full URL
//   -h, --help         display help for command

// For example, to download the solution without reporting the filename or URL,
// run:

// `get_solution -dNU practice-for-ch-mern-twitter`

// You can see these different usage options at any time by running
// `get_solution --help`.

// Script requires Node 16 or higher.

const { program } = require('commander');

class Project {
  constructor(project, options) {
    this.project = project;
    this.options = options;
    if (/^assessment-for-/.test(project) || /^practice-for-/.test(project))
      this.options.original = true;
    this.project = project;
    this.encoding = "";
    this.url = "";
    this.autograderUrl = "";
    this.filename = "";
  }

  // Use factory function so can await program inquiry
  static async create (project, options, klass) {
    const newProject = new klass(project, options);
    await newProject.assign_program_to_project_name();
    return newProject;
  }

  static AUTOGRADER_BASE_URL = "https://autograder-tests.s3.us-west-2.amazonaws.com/version2-zips";
  static PROGRAMS = ["ch", "cs", "ft", "pt", "bp", "pw", "bm"];
  // The static variables below will all be overridden by subclasses
  static PROJECT_COLOR = "";
  static BASE_URL = "";
  static VALID_PATHS = null; // must be a regular expression
  static STARTER_PREFIXES = [];
  static OLD_PREFIX_PATTERNS = [];
  static OLD_STARTER_PREFIXES = [];

  async assign_program_to_project_name() {
    if (this.options.original)
      return;
    const res = /(?<=-)(?<program>[^-]+)$/.exec(this.project);
    if (this.constructor.PROGRAMS.includes(res?.groups["program"]))
      return;
    if (this.options.program)
      this.project = `${this.project}-${this.options.program}`;
    else {
      const program = await this.#getProgram();
      this.project = `${this.project}-${program}`
    }
  }

  processProject () {
    this.setUnencodedAndEncodedFilenames();
    if (!this.filename) return;
    this.url = this.options.testOrg ?
      `${this.constructor.BASE_URL}/test/${this.encoding}.zip` :
      `${this.constructor.BASE_URL}/${this.encoding}.zip`;
    this.autograderUrl = this.options.testOrg ?
      `${this.constructor.AUTOGRADER_BASE_URL}/test/${this.encoding}.zip` :
      `${this.constructor.AUTOGRADER_BASE_URL}/${this.encoding}.zip`;
    if (this.options.autograder) this.#downloadSolution({ autograder: true })
    else if (this.options.download) this.#downloadSolution();
    else this.#printResults();
  }

  // Make setUnencodedAndEncodedFilenames public so can override in Assessment
  setUnencodedAndEncodedFilenames () {
    // Case: starter repo name
    if (this.options.original) {
      for (const starterPrefix of this.constructor.OLD_STARTER_PREFIXES) {
        const prefix = this.project.match(new RegExp(`(?<prefix>^${starterPrefix})`));
        if (prefix) {
          this.filename = this.project.replace(prefix.groups["prefix"], "");
          this.encoding = Buffer.from(this.filename).toString('base64url');
          return;
        }
      }
    }
    else {
      for (const starterPrefix of this.constructor.STARTER_PREFIXES) {
        if (new RegExp(`^${starterPrefix}`).test(this.project)) {
          this.filename = this.project;
          this.encoding = Buffer.from(this.filename).toString('base64url');
          return;
        }
      }
    }

    // Case: relative path
    let names = this.project.match(this.constructor.VALID_PATHS);
    if (!names) {
      console.log(`\n\x1b[1m${this.constructor.PROJECT_COLOR}${this.project}\x1b[0m`);
      console.log(`  \x1b[31mInvalid repo/path\x1b[0m`); // red
      return;
    }
    names = names.groups;

    const prefixPatterns = this.options.original ?
      this.constructor.OLD_PREFIX_PATTERNS :
      this.constructor.PREFIX_PATTERNS;

    for (const prefixPattern of prefixPatterns) {
      let filename = prefixPattern["filenameTemplate"];

      if (prefixPattern["dirNamePattern"].test(names["dirName"])) {
        Object.keys(names).forEach(key => {
          if (prefixPattern[key]) {
            names[key] = prefixPattern[key](names[key]);
          }
          filename = filename.replace(`<${key}>`, names[key] || "");
        });
        this.filename = filename;
        this.encoding = Buffer.from(filename).toString('base64url');
        return;
      }
    }
  }

  async #getProgram() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise (resolve => {
      rl.setPrompt(`\x1b[1m${this.constructor.PROJECT_COLOR}${this.project}\x1b[0m program (${this.constructor.PROGRAMS.join(", ")})? `);
      rl.prompt();

      rl.on('line', programInput => {
        const program = programInput.trim();
        if (!this.constructor.PROGRAMS.includes(program)) {
          console.log(`\n\x1b[31m'${program}' is not a valid program\x1b[0m`); // red
          rl.prompt();
        }
        else {
          rl.close();
          resolve(program);
        }
      });
    });
  }

  // If options specify to download both regular and autograder solutions,
  // #downloadSolution should be initially called for the autograder solution.
  #downloadSolution ({ autograder = false, msg = "" } = {}) {
    const https = require('node:https');
    const [url, filename] = autograder ?
      [this.autograderUrl, `${this.filename}-autograder`] :
      [this.url, this.filename];

    https.get(url, res => {
      switch(res.statusCode) {
        case 200:
          const fs = require('fs');
          const file = fs.createWriteStream(`./${filename}.zip`);
          res.pipe(file);
          file.on("finish", () => {
            file.close();
            if (autograder) {
              this.options.download ?
                this.#downloadSolution({ msg: `\n  Autograder solution file downloaded as: \x1b[32m${filename}.zip\x1b[0m` }) :
                this.#printResults(`  Autograder solution file downloaded as: \x1b[32m${filename}.zip\x1b[0m`);
            }
            else this.#printResults(`  Solution file downloaded as: \x1b[32m${filename}.zip\x1b[0m${msg}`);
          })
          break;
        case 403:
          if (autograder) {
            this.options.download ?
              this.#downloadSolution({ msg: `\n  \x1b[31mAutograder solution ${filename}.zip not found on S3\x1b[0m` }) :
              this.#printResults(`  \x1b[31mAutograder solution ${filename}.zip not found on S3\x1b[0m`);
          }
          this.#printResults(`  \x1b[31mSolution ${filename}.zip not found on S3\x1b[0m`);
          break;
        default:
          this.#printResults();
          console.error(res.statusMessage);
      }
    });
  }

  #printResults (message = null) {
    console.log(`\n\x1b[1m${this.constructor.PROJECT_COLOR}${this.project}\x1b[0m`) // \x1b codes print in bold(1) cyan(36)
    if (this.options.filename) console.log (`  Solution filename on S3: \x1b[33m${this.encoding}.zip\x1b[0m`); // yellow
    if (this.options.url) console.log(`  Solution URL: \x1b[34m${this.url}\x1b[0m`); // blue
    if (message) console.log(message);
  }
}

class Assessment extends Project {
  static isAssessment(project) {
    if (this.VALID_PATHS.test(project)) return true;
    for (const indicator of this.ASSESSMENT_STARTER_INDICATORS) {
      if (new RegExp(`${indicator}`).test(project)) return true;
    }
    return false;
  }

  static create(project, options) {
    return super.create(project, options, Assessment);
  }

  setUnencodedAndEncodedFilenames () {
    super.setUnencodedAndEncodedFilenames();
    // Explicitly mark assessment zips as such; must be done after encoding
    if (this.options.original)
      this.filename = /benchmark/.test(this.project) || /EXIT/.test(this.project) ?
          `benchmark-diagnostic-${this.filename}` :
          `assessment-for-${this.filename}`;
  }

  static PROJECT_COLOR = "\x1b[35m"; // magenta
  static BASE_URL = "https://aa-swe-online-mca-solution-zips.s3.us-west-2.amazonaws.com/modular-curriculum-assessments";
  static OLD_STARTER_PREFIXES = ["assessment-for-", "benchmark-diagnostic-"];
  static STARTER_PREFIXES = ["^aa\\d\\d-", "^aa-", "^prepwork-", "^benchmark-diagnostic-"]
  static ASSESSMENT_STARTER_INDICATORS = ["assessment-", "benchmark-diagnostic-"];

  // Assessment path pattern: <dirName>/<version>/projects/<projectName>
  static VALID_PATHS = /\/?(?<dirName>([^\/]*?))\/(?<version>([^\/]*?))\/projects\/(?<projectName>[^\/]*)/;
  static PREFIX_PATTERNS = [
    // dirNamePattern key must be a regex
    {
      dirNamePattern: /^FT/,
      filenameTemplate: "aa<dirName>-assessment-<version>-<projectName>",
      dirName: dirName => dirName.replace("FT", "")
    },
    {
      dirNamePattern: /^PREP/,
      filenameTemplate: "prepwork-assessment-<version>-<projectName>"
    },
    {
      dirNamePattern: /^EXIT/,
      filenameTemplate: "benchmark-diagnostic-<version>-<projectName>"
    },
    {
      // Full-time (should eventually be deprecated in favor of /^FT/ pattern)
      dirNamePattern: /^\d\d/,
      filenameTemplate: "aa<dirName>-assessment-<version>-<projectName>",
      dirName: dirName => `${parseInt(dirName) + 20}`
    },
    {
      dirNamePattern: /^ch-/,
      filenameTemplate: "aa-<dirName>-assessment-<version><projectName>",
      // this.dn is just used to provide access to the dirName in the project_name calculation
      dirName: dirName => this.dn = dirName.replace(/^ch-/, ""),
      projectName: projectName => new RegExp(`^${this.dn.slice(0, -2)}`).test(projectName) ? projectName.slice(-3) : `-${projectName}`
    },
    {
      // Default pattern (must be the last item in this array)
      dirNamePattern: /./,
      filenameTemplate: "aa-<dirName>-assessment-<version>-<projectName>",
    }
  ]

  static OLD_PREFIX_PATTERNS = [
    // dirNamePattern key must be a regex
    {
      dirNamePattern: /^FT/,
      filenameTemplate: "sprint-<dirName>-<version>-<projectName>",
      dirName: dirName => dirName.replace("FT", "")
    },
    {
      dirNamePattern: /^PREP/,
      filenameTemplate: "prepwork-<version>-<projectName>"
    },
    {
      dirNamePattern: /^EXIT/,
      filenameTemplate: "<version>-<projectName>"
    },
    {
      // Full-time (should eventually be deprecated in favor of /^FT/ pattern)
      dirNamePattern: /^\d\d/,
      filenameTemplate: "week-<dirName>-<version>-<projectName>"
    },
    {
      // Default pattern (must be the last item in this array)
      dirNamePattern: /./,
      filenameTemplate: "<dirName>-<version>-<projectName>"
    }
  ];
}

class Practice extends Project {
  static create(project, options) {
    return super.create(project, options, Practice);
  }

  static PROJECT_COLOR = "\x1b[36m"; // cyan
  static BASE_URL = "https://appacademy-open-assets.s3.us-west-1.amazonaws.com/modular-curriculum-practices";
  static STARTER_PREFIXES = ["^aa\\d\\d-", "^aa-", "^prepwork-", "^setup-"];
  static OLD_STARTER_PREFIXES = ["practice-for-"];

  // Practice path pattern: <dirName>/practices/<practiceName>
  static VALID_PATHS = /\/?(?<dirName>([^\/]*?))\/practices\/(?<practiceName>[^\/]*)/;
  static PREFIX_PATTERNS = [
    // :dirNamePattern key must be a regex
    {
      dirNamePattern: /^FT/,
      filenameTemplate: "aa<dirName>-<practiceName>",
      dirName: dirName => dirName.replace("FT", ""),
      practiceName: practiceName => practiceName.replace(/-long-practice/, "").replace(/-short-practice/, "")
    },
    {
      dirNamePattern: /^PREP/,
      filenameTemplate: "prepwork-<practiceName>",
      practiceName: practiceName => practiceName.replace(/-long-practice/, "").replace(/-short-practice/, "")
    },
    {
      dirNamePattern: /^SETUP/,
      filenameTemplate: "setup-<practiceName>",
      practiceName: practiceName => practiceName.replace(/-setup/, "")
    },
    {
      // Full-time (should eventually be deprecated in favor of /^FT/ pattern)
      dirNamePattern: /^\d\d/,
      filenameTemplate: "aa<dirName>-<practiceName>",
      dirName: dirName => `${parseInt(dirName) + 20}`,
      practiceName: practiceName => practiceName.replace(/-long-practice/, "").replace(/-short-practice/, "")
    },
    {
      dirNamePattern: /^ch-/,
      filenameTemplate: "aa-<dirName>-<practiceName>",
      dirName: dirName => dirName.replace(/^ch-/, ""),
      practiceName: practiceName => practiceName.replace(/-long-practice/, "").replace(/-short-practice/, "")
    },
    {
      // Default pattern (must be the last item in this array)
      dirNamePattern: /./,
      filenameTemplate: "aa-<dirName>-<practiceName>",
      practiceName: practiceName => practiceName.replace(/-long-practice/, "").replace(/-short-practice/, "")
    }
  ]
  static OLD_PREFIX_PATTERNS = [
    // dirNamePattern key must be a regex
    {
      dirNamePattern: /^FT/,
      filenameTemplate: "sprint-<dirName>-<practiceName>",
      dirName: dirName => dirName.replace("FT", "")
    },
    {
      dirNamePattern: /^PREP/,
      filenameTemplate: "prepwork-<practiceName>"
    },
    {
      // Full-time (should eventually be deprecated in favor of /^FT/ pattern)
      dirNamePattern: /^\d\d/,
      filenameTemplate: "week-<dirName>-<practiceName>"
    },
    {
      // Default pattern (must be the last item in this array)
      dirNamePattern: /./,
      filenameTemplate: "<dirName>-<practiceName>"
    }
  ]
}

program.name('get_solution')
       .description('Get the solution filename/url/zip for <projects>')
       .version('3.1.0')
       .argument('[projects...]', 'projects\' starter repos or relative paths in mcp/mca')
       .option('-d, --download', 'Download the solution .zip file(s)')
       .option('-a, --autograder', 'Download the autograder solution .zip file(s)')
       .option('-o, --original', 'Use the original repo naming')
       .option('-t, --testOrg', 'Get solution for the app-academy-test GitHub org')
       .option('-p, --program <program>', 'Specify the program (ch, ft, or pt)')
       .option('-N, --no-filename', 'Skip displaying a solution\'s encoded filename')
       .option('-U, --no-url', 'Skip displaying a solution\'s full URL')
       .action(getProjectSolutions)
       .parse();

function getProjectSolutions (projects) {
  if (projects.length !== 0) {
    processProjects(projects);
    return;
  }

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Enter starter repo names or relative paths to projects in mcp or mca to');
  console.log('generate the solution filenames/URLs on S3 and/or download the solutions.');
  rl.question("> ", projectsInput => {
    rl.close();
    projectsInput = projectsInput.trim().split(/\s+/);
    if (projectsInput[0] !== '') processProjects(projectsInput);
  });
}

async function processProjects(projectNames) {
  const options = program.opts();

  for (const projectName of projectNames) {
    project = Assessment.isAssessment(projectName) ?
      await Assessment.create(projectName, options) :
      await Practice.create(projectName, options);

    project.processProject();
  };
}
