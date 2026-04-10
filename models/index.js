const sequelize = require("../database");
const { DataTypes } = require("sequelize");

// Tournament Team model
const Team = sequelize.define("Team", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Match model (basic structure for bracket games)
const Match = sequelize.define("Match", {
  round: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teamA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teamB: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scoreA: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  scoreB: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  winner: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = {
  sequelize,
  Team,
  Match,
};