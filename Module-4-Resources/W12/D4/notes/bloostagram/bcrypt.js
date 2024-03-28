const bcrypt = require("bcryptjs");

const password1 = "somepassword123!";

const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 13);
  return hash;
};
// console.time("hashPassord");
const hashedPassword = hashPassword(password1);
//  $2a$13$W6qDPsJavq/igxMm25skN.8fujwNtlzPEB.eOnlg59VWtWVl6ZeJ.
//  \_/\_/\____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash
// console.timeEnd("hashPassord");

console.log("hashedPassword: ", hashedPassword);

const password2 = "notourpassword23!";

const testPassword = (password, hash) => {
  const isPassword = bcrypt.compareSync(password, hash);
  return isPassword;
};

const isPassword = testPassword(password1, hashedPassword);

console.log(isPassword);
