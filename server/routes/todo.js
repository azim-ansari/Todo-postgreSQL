const todoController = require('../controller/todoController');
const express = require('express');
const router = express.Router();

router.post('/add-todo',todoController.addTodo)
router.get('/all-todo',todoController.allTodoList)
router.get('/single-todo/:id',todoController.singleTodo)
router.put('/update-todo/:id',todoController.updateTodo)
router.delete('/delete-todo/:id',todoController.deleteTodo)

module.exports = router