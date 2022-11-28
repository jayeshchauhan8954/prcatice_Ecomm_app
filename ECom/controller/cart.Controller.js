const db = require("../model");

const Cart = db.cart;
const Products = db.product;

const createCart = async (req, res, next) => {
  const cart = { cost: 0 };
  try {
    await Cart.create(cart);

    res.status(201).json({
      message: "cart created",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Sonthing went wrong!",
    });
  }
};

const updateCart = async (req, res, next) => {
  const cartId = req.params.cartId;

  const cartToUpdate = await Cart.findByPk(cartId);

  if (cartToUpdate) {
    let productToAdd = await Products.findAll({
      where: {
        id: req.body.productIds,
      },
    });

    if (productToAdd) {
      await cartToUpdate.setProducts(productToAdd);
      console.log("product added");
      let Totalcost = 0;
      let productSelected = [];

      let products = await cartToUpdate.getProducts();
      for (let i = 0; i < products.length; i++) {
        let totalCost = totalCost + products[i].price;

        productSelected.push({
          id: products[i].id,
          name: products[i].name,
          cost: products[i].cost,
        });
      }

      res.status(20).json({
        id: cartToUpdate.id,
        productSelected,
        Totalcost,
      });
    }
  }
};

const getCart = async (req, res, next) => {
  let cart = await Cart.findByPk(req.params.cartId);
  let totalCost = 0;

  let productSelected = [];
  let products = await cartToUpdate.getProducts();
  for (let i = 0; i < products.length; i++) {
    let totalCost = totalCost + products[i].price;

    productSelected.push({
      id: products[i].id,
      name: products[i].name,
      cost: products[i].cost,
    });
  }
};

module.exports = { createCart, updateCart, getCart };
