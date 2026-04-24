module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Team.associate = (models) => {
    Team.hasMany(models.Match, {
      as: "homeMatches",
      foreignKey: "teamAId"
    });

    Team.hasMany(models.Match, {
      as: "awayMatches",
      foreignKey: "teamBId"
    });
  };

  return Team;
};