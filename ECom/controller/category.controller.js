const db = require("../model");
const Categories = db.category;
const sequelizeInstance = require("../config/db.config");

const insertCategories = async () => {
  await Categories.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobiles",
    },
    {
      name: "Elctionics",
    },
    {
      name: "Applinces",
    },
  ]);
};

// insertCategories();

const getAllCategory = async (req, res) => {
  const categories = await Categories.findAll();
  // res.writeHead(200, { "Content-Type": "application/json" });
  res.status(200).json({
    message: "success",
    data: categories,
  });
};

const getCategoryById = async (req, res) => {
  const id = req.params.categoryId;
  if (!id) {
    res.status(400).json({
      message: "Please enter valid id",
    });
  }
  const category = await Categories.findAll({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    message: "Success",
    data: category,
  });
};

const addNewCategory = async (req, res, next) => {
  const categoryToAdd = req.body.name;
  try {
    const category = await Categories.create({
      name: categoryToAdd,
    });
    res.status(201).json({
      message: "Created",
      data: category,
    });
  } catch (error) {
    next(error);
    throw new Error("Error Happen");
  }
};

const updateCategoryById = async (req, res) => {
  let id = req.params.categoryId;
  if (!id) {
    return res.status(400).json({
      status: "Error",
      message: "Id field is   empty",
    });
  }
  const { name } = req.body;
  try {
    let categoriesToUpdate = {
      name: name,
    };
    await Categories.update(categoriesToUpdate, {
      where: {
        id: id,
      },
    });

    let updateCategory = await Categories.findByPk(id);

    res.status(200).json({
      message: "Category updated",
      data: updateCategory,
    });
  } catch (error) {
    res.status(200).json({
      message: "Something went wrong",
      data: null,
    });
  }
};

const deleteCategoryById = async (req, res) => {
  const categoryId = req.params.categoryId;
  await Categories.destroy({
    where: {
      id: categoryId,
    },
  });
  res.status(200).json({
    message: "Category deleted",
    data: null,
  });
};

module.exports = {
  getAllCategory,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
