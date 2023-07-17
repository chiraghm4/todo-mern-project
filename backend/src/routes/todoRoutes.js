const express = require('express')
const {getTodo, createTodo, updateTodo, deleteTodo, searchTodo, getOneTodo, registerUser, loginUser} = require('../controllers/todoController')

const todoRouter = express.Router();

todoRouter.get("/:userId", getTodo)

todoRouter.get("/:id", getOneTodo)

todoRouter.post("/:userId", createTodo)

todoRouter.put("/:id", updateTodo)

todoRouter.delete("/:id", deleteTodo)

todoRouter.get('/search/:keyword', searchTodo)

todoRouter.post('/register', registerUser)

todoRouter.post('/login', loginUser)

module.exports = todoRouter