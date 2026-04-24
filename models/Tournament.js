module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Tournament", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};