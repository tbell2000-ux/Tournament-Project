const { Sequelize } = require("sequelize");

// Using SQLite so you don't need to install a database server
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

module.exports = sequelize;