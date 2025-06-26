const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
});