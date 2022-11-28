module.exports = (sequelize, dbConnection) => {
  const Category = dbConnection.define(
    "categories",
    {
      id: {
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: sequelize.DataTypes.BIGINT,
      },
      name: {
        notNull: true,
        type: sequelize.DataTypes.STRING,
      },
    },
    { timestamps: true }
  );

  return Category;
};

// Category.sync({ alter: true });
