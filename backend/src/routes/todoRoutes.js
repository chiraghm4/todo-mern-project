const express = require('express')
const {getTodo, createTodo, updateTodo, deleteTodo} = require('../controllers/todoController')

const todoRouter = express.Router();

todoRouter.get("/", getTodo)

todoRouter.post("/", createTodo)

todoRouter.put("/:id", updateTodo)

todoRouter.delete("/:id", deleteTodo)


module.exports = todoRouter