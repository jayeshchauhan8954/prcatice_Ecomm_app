const db = require("../model");
const Products = db.product;
const sequelizeInstance = require("../config/db.config");
const Sequelize = require("sequelize");

// createTable();

const insertProducts = async () => {
  await Products.bulkCreate([
    {
      name: "Samsung Galaxy Note",
      categoryId: 1,
      price: 18000,
    },
    {
      name: "Iphone 13",
      categoryId: 1,
      price: 60000,
    },
    {
      name: "Sony bravia",
      categoryId: 2,
      price: 40000,
    },
    {
      name: "Boat Rugged",
      categoryId: 5,
      price: 4000,
    },
    {
      name: "JBL Storm",
      categoryId: 5,
      price: 9000,
    },
    {
      name: "Vu 5",
      categoryId: 2,
      price: 32000,
    },
  ]);
};
// insertProducts();

const getAllProducts = async (req, res) => {
  let categoryId = req.query.categoryId;
  let minPrice = req.query.minPrice;
  let maxPrice = req.query.maxPrice;
  let products = [];

  if (!req.query) {
    products = await Products.findAll();
  }
  // products = await Products.findAll({
  //   where: {
  //     categoryId: categoryId,
  //     price: {
  //       [Sequelize.Op.gte]: minPrice,
  //       [Sequelize.Op.lte]: maxPrice,
  //     },
  //   },
  // });
  // if (minPrice && maxPrice) {
  //   products = await filterByPriceRange(minPrice, maxPrice);
  // }
  // if (categoryId) {
  //   products = await filterByCategoryId(categoryId);
  // } else {
  //   products = await Products.findAll();
  // }

  res.status(200).json({
    data: products,
  });
};

const filterByCategoryId = async (categoryId) => {
  return await Products.findAll({
    where: {
      categoryId: categoryId,
    },
  });
};

const filterByPriceRange = async (minPrice, maxPrice) => {
  return await Products.findAll({
    where: {
      price: {
        [Sequelize.Op.gte]: minPrice,
        [Sequelize.Op.lte]: maxPrice,
      },
    },
  });
};

const getProductById = async (req, res) => {
  const id = req.params.productId;
  if (!id) {
    res.status(400).json({
      message: "Please enter valid id",
    });
  }
  const product = await Products.findAll({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    message: "seccess",
    data: product,
  });
};

const addNewProduct = async (req, res) => {
  const product = await Products.bulkCreate([req.body]);
  res.status(201).json({
    message: "Created",
    data: product,
  });
};

const updateProductById = async (req, res) => {
  const { name, price } = req.body;
  const id = req.params.productId;
  const product = await Products.update(
    { name, price },
    {
      where: {
        id: id,
      },
    }
  );

  let updatedProduct = await Products.findByPk(id);
  res.status(201).json({
    message: "Updated",
    data: updatedProduct,
  });
};

const deleteProductById = async (req, res) => {
  const id = req.params.productId;
  await Products.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).json({
    message: "Deleted Successfully",
    data: null,
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
};
