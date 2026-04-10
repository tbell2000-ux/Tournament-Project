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
    teamAId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teamBId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Match.associate = (models) => {
    Match.belongsTo(models.Team, {
      as: "teamA",
      foreignKey: "teamAId"
    });

    Match.belongsTo(models.Team, {
      as: "teamB",
      foreignKey: "teamBId"
    });
  };

  return Match;
};