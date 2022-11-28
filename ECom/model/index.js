const sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const dbConfig = require("../config/db.config")[env];
let db = {};

db.connection = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql",
  operatorsAliases: 0,
  pool: dbConfig.pool,
});

db.sequelize = sequelize;
db.roles = require("./role")(sequelize, db.connection);
db.user = require("./user")(sequelize, db.connection);
db.cart = require("./cart")(sequelize, db.connection);
db.product = require("./product")(sequelize, db.connection);
db.category = require("./category")(sequelize, db.connection);

db.roles.belongsToMany(db.user, {
  through: "user_roles", // create inner-join || creting a new table
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.product.belongsToMany(db.cart, {
  through: "cart_proucts",
  foreignKey: "productId",
  otherKey: "cartId",
});

db.cart.belongsToMany(db.product, {
  through: "cart_proucts",
  foreignKey: "cartId",
  otherKey: "productId",
});

db.Roles = ["user", "admin"];

module.exports = db;
