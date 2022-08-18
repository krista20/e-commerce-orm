// import important parts of sequelize library
const { DECIMAL } = require('sequelize');
const { NUMERIC } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
      // defining ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      // defining PRODUCT_NAME
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      // defining PRICE
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: DECIMAL
    },
    // defining STOCK
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: NUMERIC
    },
    // defining CATEGORY_ID
    category_id: {
     type: DataTypes.INTEGER,
     references: {
      module: "category", key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
