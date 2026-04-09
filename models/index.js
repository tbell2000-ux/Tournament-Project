const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Team = require("./team")(sequelize, DataTypes);
const Tournament = require("./tournament")(sequelize, DataTypes);
const Match = require("./match")(sequelize, DataTypes);

// Associations
Team.hasMany(Match, { as: "teamA", foreignKey: "teamAId" });
Team.hasMany(Match, { as: "teamB", foreignKey: "teamBId" });
Match.belongsTo(Team, { as: "teamA", foreignKey: "teamAId" });
Match.belongsTo(Team, { as: "teamB", foreignKey: "teamBId" });

module.exports = { sequelize, Team, Tournament, Match };