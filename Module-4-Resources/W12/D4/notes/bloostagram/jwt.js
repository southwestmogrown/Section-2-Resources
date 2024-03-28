const jwt = require("jsonwebtoken");

const payload = {
  firstName: "Shane",
  lastName: "Wilkey",
};

const secretKey = "supersecretkey";

const createToken = () => {
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
};

const token = createToken();
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 => header
// .eyJmaXJzdE5hbWUiOiJTaGFuZSIsImxhc3ROYW1lIjoiV2lsa2V5IiwiaWF0IjoxNzExNjQyNDExfQ => payload
// .aKeex6BP2S5quZfy5isLYLSd5sI5_FmMvmV1lNWunUc => signature

console.log(token);

const verifyToken = (token) => {
  const verified = jwt.verify(token, secretKey);
  return verified;
};

const isVerified = verifyToken(token);
console.log(isVerified);

const jwtArray = token.split(".");

const [header, pLoad, signature] = jwtArray;

console.log("header", header);
console.log("header", Buffer.from(header, "base64").toString());
console.log("pload", pLoad);
console.log("pload", Buffer.from(pLoad, "base64").toString());
console.log("signature", signature);
console.log("signature", Buffer.from(signature, "base64").toString());
