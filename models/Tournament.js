module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define("Tournament", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Tournament;
};