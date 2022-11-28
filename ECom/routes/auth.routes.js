const express = require("express");
const router = require("express").Router();
const authController = require("../controller/auth.controller");
const { checkDuplicateUserName } = require("../middlewares/verifySignup");
const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
router.post("/signup", checkDuplicateUserName, authController.signup);

router.post("/signin", authController.signin);

module.exports = router;
