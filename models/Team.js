module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    name: { type: DataTypes.STRING, allowNull: false },
  });

  Team.associate = (models) => {
    Team.hasMany(models.Match, { as: "matchesA", foreignKey: "teamAId" });
    Team.hasMany(models.Match, { as: "matchesB", foreignKey: "teamBId" });
  };

  return Team;
};