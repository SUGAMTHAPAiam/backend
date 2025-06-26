const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define("Todo", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.DATE,
  });