const jwt = require("jsonwebtoken");

const createToken = (payload, secretKey) => {
  const token = jwt.sign(payload, secretKey);
  return token;
};

const payload = {
  firstName: "Shane",
  lastName: "Wilkey",
};

const secretKey = "supersecretkey";

const token = createToken(payload, secretKey);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 => header
// .eyJmaXJzdE5hbWUiOiJTaGFuZSIsImxhc3ROYW1lIjoiV2lsa2V5IiwiaWF0IjoxNzE4OTAyNzk3fQ => payload
// .5oafk_07hLTJuF136I3oo5WK8gGzsQvFh30f5r21XeA => signature

// const badToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.oiV2lsa2V5IiwiaWF0IjoxNzE4OTAyNzk3fQeyJmaXJzdE5hbWUiOiJTaGFuZSIsImxhc3ROYW1lIj.5oafk_07hLTJuF136I3oo5WK8gGzsQvFh30f5r21XeA".toJSON();

// console.log(token);

const verifyToken = (token, secretKey) => {
  const verified = jwt.verify(token, secretKey);
  return verified;
};

const isVerified = verifyToken(token, secretKey);

// console.log({ isVerified });

// const notVerified = verifyToken(badToken, secretKey);
// console.log({ notVerified });

// const decoded = jwt.decode(token);

// console.log({ decoded });

const jwtArray = token.split(".");

const [header, pLoad, signature] = jwtArray;

console.log("header", header);
console.log("header buffered: ", Buffer.from(header, "base64").toString());
console.log("payload", pLoad);
console.log("payload buffered: ", Buffer.from(pLoad, "base64").toString());
console.log("signature", signature);
console.log(
  "signature buffered: ",
  Buffer.from(signature, "base64").toString()
);
