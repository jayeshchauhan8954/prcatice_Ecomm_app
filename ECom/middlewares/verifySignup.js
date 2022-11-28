const db = require("../model");

const User = db.user;
const Roles = db.roles;

let checkDuplicateUserName = async (req, res, next) => {
  const findUser = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (findUser) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  next();
};

const checkRolesExist = async (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {}
  }
};

module.exports = { checkDuplicateUserName };
