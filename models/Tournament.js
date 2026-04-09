module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define("Tournament", {
    name: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "upcoming" },
  });
  return Tournament;
};