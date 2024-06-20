const bcrypt = require("bcryptjs");

const hashPass = (password) => {
  const hash = bcrypt.hashSync(password, 12);
  return hash;
};

const hashedPassword = hashPass("supersecretpassword");
// $2a$12$IS4joduRYAGw./ozm0V2OuT/kPHeenrkLUJqNT9ndiuZ.uBhbwNlm
//  \_/\_/\____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash
console.log(hashedPassword);

const testPass = (password, hashedPassword) => {
  const isPassword = bcrypt.compareSync(password, hashedPassword);
  return isPassword;
};

console.log(testPass("supersecretpassword", hashedPassword));
