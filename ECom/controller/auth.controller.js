const db = require("../model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = db.sequelize;
const secretKey = require("../config/auth.config");
const User = db.user;
const Role = db.roles;

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await User.create({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 10),
  });

  if (req.body.roles) {
    let roles = await Role.findAll({
      where: {
        name: {
          [Sequelize.Op.or]: req.body.roles,
        },
      },
    });

    await user.setRoles(roles);

    res.status(201).json({
      status: "success",
      message: "User created",
      data: user,
    });
  }
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;

  let userName = await User.findOne({
    where: {
      username: username,
    },
  });

  console.log("usersdfasdfasdf", userName);

  if (!username) {
    res.status(404).json({
      message: "User not fund",
    });
    return;
  }

  let isValidPassword = bcrypt.compareSync(password, userName.password);

  if (!isValidPassword) {
    res.status(401).json({
      message: "Password in incorrect",
    });
    return;
  }
  let token = jwt.sign({ id: userName.id }, secretKey.secret, {
    expiresIn: 86400,
  });

  let authorities = [];
  let roles = await userName.getRoles();
  for (let i = 0; i < roles.length; i++) {
    authorities.push("ROLE_" + roles[i]?.name.toUpperCase());
  }

  res.status(200).json({
    id: userName.id,
    username: userName.username,
    email: userName.email,
    roles: authorities,
    accessToken: token,
  });
};
