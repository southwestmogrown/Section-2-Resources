# Section 2 Resources Setup Guide

The Section 2 Resources repo is our one stop shop for all things Mod 2.
This is the repo we will be working out of for guided practices/lectures. At the
end of the day, all solutions will be pushed up to this repo for reference. You
will also find several extra practices, notes, and review guides as you explore.

This is a very important study tool, so it is key that we set it up properly.
One thing of note is that you will want to have 2 copies of this repo locally.
1 will be strictly to pull down solutions provided by instruction. You will not
want to work in this copy because you will run into merge conflicts.

In order to prevent merge conflicts you will clone down a second copy to work
in. You will create a new repo on your personal GitHub and change the remote
url of your second copy.

This guide will walk you through this process.

## Step 1 Clone the Repo

- On your local machine, create a new folder named `Section 2` to hold these repos.
  Make sure that this folder will not be nested in any other git repositories that
  you may have. Nested repos are bad, mmkay?

- Next you will run the clone command from your terminal. This may look a little
  bit different than you have seen, because we are only pulling a specific branch.
  You will use one of the following commands based on how you set up your
  authentication with GitHub.

  - If you are using a PAT you will need the HTTPS URL:

    - `git clone -b 2024-April-Cohort https://github.com/southwestmogrown/Section-2-Resources.git`

  - If you are using SSH you will need to use the SSH URL:

    - `git clone -b 2024-April-Cohort git@github.com:southwestmogrown/Section-2-Resources.git`

  - What does this command mean?

    - You should be familiar with the `git clone` part. It is simply telling git
      "Hey, git, clone the following repo"

    - The `-b` is short hand for `--branch`. So we are telling git to clone a
      specific branch.

    - `2024-April-Cohort` is the specific branch that we want to clone.
      Without the `-b` and `2024-April-Cohort` you would just clone down the
      entire repo and be on the `main` branch. So when you pull you would never
      see the changes we made, until you switched to the proper branch.

    - The URL is the address of the entire repo, we just adjust based on our
      personal authentication settings.

- This repo is now good to go. The only thing you will do with this repo from
  now on is `git pull` to see the solutions.

## Step 2 Create a Working Repo

- This step will be very similar to what you did above.
  However, since we are cloning down `Section-2-Resources`
  again, you will need to give this copy an alias.
  Git will just try to overwrite the file that already
  exists if you don't.

- To get started, make sure you are in the `Section 2` folder you created earlier.
  If you `ls` now, you should see `Section-2-Resources` is the only directory in
  the `Section 2-Resources` folder.

- Next you will run the same command you did above:

  - `git clone -b 2024-April-Cohort https://github.com/southwestmogrown/Section-2-Resources.git My-Section-2-Resources`

  - OR

  - `git clone -b 2024-April-Cohort git@github.com:southwestmogrown/Section-2-Resources.git My-Section-2-Resources`

  - Notice the difference? We simply added `My-Section-2-Resources` on the end.
    This will give our new clone the name `My-Section-2-Resources`

- You should now have `Section-2-Resources` and `My-Section-2-Resources` inside of your `Section-2-Resources`
  folder.

- Now you will need to follow the instructions in the `README.md` file directly
  below this file. This will walk you through how to create your new repo on
  GitHub.

- Next, you need to change the remote URL for `My-Section-2-Resources`

  - `cd` into `My-Section-2-Resources`

  - Run `ls -a` in your terminal, and you will see a `.git` file hanging out.
    If you do, you're in the right place.

  - Run the command `git remote set-url origin <your peronal repo url here>`

  - Replace "<your personal repo url here>" with the url from your
    newly created repo.

  - Run `git remote -v` to make sure the remote URL has changed.

  - Run `git push` to see the code on GitHub

- This is now your own working repo to change and work on as you please.

## Step 3 Create A Working Branch

- It is a good practice to leave the main branch of your repo un-altered,
  so that you can have a fresh version to practice with whenever you need.
  This can be achieved by using a `git branch`.
  In order to set up a new branch simply input the command

- `git checkout -b <branch name>` (make sure to replace `<branch name>` with
  your desired name)

- Next, run `git push --set-upstream origin <branch name>` This push your new
  branch up to your GitHub repo from above.

- That's it! You're now set up to work from your working branch, and will leave
  the main branch untouched.

- If you ever want to create a fresh branch simply `git checkout main`, which
  will bring you back to the `main` branch. Then, run the command above with a new
  branch name. This process allows you to preserve your work while making multiple
  attempts at the same material!

## Important

Make sure you know which repo you are in before pushing or pulling! Remember,
ONLY use the `Section-2-Resources` to pull down solutions. Use `My-Section-2-Resources` for
working and pushing/pulling from your own private repo.
