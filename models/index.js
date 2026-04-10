const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false
});

const db = {};

fs.readdirSync(__dirname)
  .filter(file => file.endsWith(".js") && file !== "index.js")
  .forEach(file => {
    const modelExport = require(path.join(__dirname, file));

    let model;

    // CASE 1: function-based model
    if (typeof modelExport === "function" && modelExport.length === 2) {
      model = modelExport(sequelize, Sequelize.DataTypes);
    }

    // CASE 2: class-based model (already defined Sequelize model)
    else if (modelExport && modelExport.name) {
      model = modelExport;
    }

    // fallback safety
    else {
      throw new Error(`Invalid model format in file: ${file}`);
    }

    db[model.name] = model;
  });

// run associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;