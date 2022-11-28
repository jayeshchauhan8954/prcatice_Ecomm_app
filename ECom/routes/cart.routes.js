const express = require("express");
const cartRouter = express.Router();
const authJWT = require("../middlewares/authJWT");
const cartController = require("../controller/cart.Controller");

cartRouter.get(":/cartId", cartController.getCart);
cartRouter.put(":/cartId", cartController.updateCart);

cartRouter.post("/", cartController.createCart);

module.exports = cartRouter;
