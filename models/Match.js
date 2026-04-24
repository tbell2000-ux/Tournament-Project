module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define("Match", {
    round: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scoreA: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    scoreB: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    teamAId: DataTypes.INTEGER,
    teamBId: DataTypes.INTEGER
  });

  return Match;
};