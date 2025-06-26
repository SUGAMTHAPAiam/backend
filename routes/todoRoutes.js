const express = require("express");
const auth = require("../middleware/authMiddleware");
const { Todo } = require("../models");

const router = express.Router();

router.use(auth);

router.get("/", async (req, res) => {
  const todos = await Todo.findAll({ where: { UserId: req.user.id } });
  res.json(todos);
});

router.post("/", async (req, res) => {
  const todo = await Todo.create({ ...req.body, UserId: req.user.id });
  res.json(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findOne({ where: { id: req.params.id, UserId: req.user.id } });
  if (!todo) return res.sendStatus(404);
  await todo.update(req.body);
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  const deleted = await Todo.destroy({ where: { id: req.params.id, UserId: req.user.id } });
  res.sendStatus(deleted ? 204 : 404);
});

module.exports = router;