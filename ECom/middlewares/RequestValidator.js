const db = require("../model");
const Category = db.category;

const requestValidateForCategoryName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: "Error",
      message: "Category is void",
    });
  }
  next();
};

const validateReqForCategoryId = async (req, res, next) => {
  let categoryId = req.params.categoryId;
  if (!categoryId) {
    return res.status(400).json({
      status: "Error",
      message: "CategoryIs is missing",
    });
  }
  let category = await Category.findByPk(categoryId);

  if (!category) {
    return res.status(400).json({
      status: "Error",
      message: "Category doesn't exist!",
    });
  }

  next();
};

module.exports = { requestValidateForCategoryName, validateReqForCategoryId };
