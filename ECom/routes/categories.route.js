const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controller/category.controller");
const {
  requestValidateForCategoryName,
  validateReqForCategoryId,
} = require("../middlewares/RequestValidator");

categoryRouter.get("/", categoryController.getAllCategory);

categoryRouter.get(
  "/:categoryId",

  validateReqForCategoryId,
  categoryController.getCategoryById
);

categoryRouter.post(
  "/",
  requestValidateForCategoryName,
  categoryController.addNewCategory
);
categoryRouter.put(
  "/:categoryId",
  requestValidateForCategoryName,
  categoryController.updateCategoryById
);
categoryRouter.delete("/:categoryId", categoryController.deleteCategoryById);

module.exports = categoryRouter;
