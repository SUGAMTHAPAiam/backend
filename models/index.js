const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({ dialect: "sqlite", storage: "./db.sqlite" });

const User = require("./user")(sequelize);
const Todo = require("./todo")(sequelize);

User.hasMany(Todo);
Todo.belongsTo(User);

module.exports = { sequelize, User, Todo };