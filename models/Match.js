module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define("Match", {
    round: { type: DataTypes.INTEGER, allowNull: false },
    scoreA: { type: DataTypes.INTEGER, allowNull: true },
    scoreB: { type: DataTypes.INTEGER, allowNull: true },
  });

  Match.associate = (models) => {
    Match.belongsTo(models.Team, { as: "teamA", foreignKey: "teamAId" });
    Match.belongsTo(models.Team, { as: "teamB", foreignKey: "teamBId" });
  };

  return Match;
};