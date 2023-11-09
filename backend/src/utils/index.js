var jwt = require('jsonwebtoken');

module.exports = {
  createToken: (userData, secret) => {
    try {
      const payload = {
        id: userData.id,
        email: userData.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
      }

      const token = jwt.sign(payload, secret);
      return token;
    } catch (error) {
      console.log("There was an error signing the JWT!", error.message);
      return undefined;
    }
  }
};