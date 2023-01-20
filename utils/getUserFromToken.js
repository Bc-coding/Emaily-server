const JWT = require("jsonwebtoken");
const keys = require("../config/keys");

const getUserFromToken = (token) => {
  try {
    // console.log(token);
    return JWT.verify(token, keys.jwtSinganiture);
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = getUserFromToken;
