const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      message: "Unauthorised user",
    });
  }
  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "unsuthorised user",
      });
    }
    req.userId = decoded.id;
  });

  next();
};

module.exports = { verifyToken };
