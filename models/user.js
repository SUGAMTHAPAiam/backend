const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize) =>
  sequelize.define("User", {
    username: { type: DataTypes.STRING, unique: true },
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue("password", bcrypt.hashSync(value, 8));
      },
    },
  });