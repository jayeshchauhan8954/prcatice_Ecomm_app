module.exports = (sequelize, dbConnection) => {
  const Products = dbConnection.define(
    "products",
    {
      id: {
        type: sequelize.DataTypes.INTEGER,
        notNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        notNull: true,
        type: sequelize.DataTypes.STRING,
      },
      price: {
        notNull: true,
        type: sequelize.DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Products;
};

// CategoryModel.hasMany(Products);
// Products.sync({ alter: true });
