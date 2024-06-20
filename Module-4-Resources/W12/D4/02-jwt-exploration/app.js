// configure environment - DO NOT MODIFY
require("dotenv").config();

// Import package
const jwt = require("jsonwebtoken");
// Your code here

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

// Your code here
token = jwt.sign(
  { email: "johnny@gmail.com" }, // payload object
  process.env.SECRET_KEY, // secret token from .env file
  { expiresIn: "1h" } // options (example: Token expires in 1 hour)
);
// See the JWT in the console - DO NOT MODIFY
console.log("JWT:", token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

// Your code here
payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log("Payload:", payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// Your code here
verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);
// See the verified payload in the console - DO NOT MODIFY
console.log("Verified Payload:", verifiedPayload);

const badKey =
  "a5820a7587d1792a65f7c322795dcbcdd07f8b570d46a696a22f517242c2ca00d5876b5ec370bb93ab86f24c28c37d7c076723f169154d24c40956f06f9a1d73";

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here
try {
  jwt.verify(token, badKey);
} catch (e) {
  console.log(e);
}
// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here
