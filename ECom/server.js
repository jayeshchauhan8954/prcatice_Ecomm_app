const express = require("express");
const serverConfig = require("./config/server.config");
const router = require("./routes/index");
const dbConnection = require("./config/db.config");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middlewares/ErrorHandler");
const db = require("./model");
const Category = db.category;
const Products = db.product;
const Roles = db.roles;
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use middleware = for router
app.use("/api/v1/", router);

//it will alwaya be in last =
app.use(ErrorHandler);

Category.hasMany(Products);

const init = async () => {
  await db.connection.sync({ force: true });
  insertCategories();
  insertRoles();
};

const insertCategories = async () => {
  await Category.bulkCreate([
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

const insertRoles = async () => {
  Roles.bulkCreate([
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "admin",
    },
  ]);
};

app.listen(serverConfig.PORT, () => {
  console.log(`server is running at ${serverConfig.PORT}`);
  init();
});
