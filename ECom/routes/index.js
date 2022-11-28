const express = require("express");
const router = express.Router();
const categoryRoutes = require("./categories.route");
const productRoutes = require("./products.route");
const authRoutes = require("./auth.routes");
const cartRoutes = require("./cart.routes");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: "nothig",
  });
});

router.use("/categories", categoryRoutes);
router.use("/product", productRoutes);
router.use("/auth", authRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
