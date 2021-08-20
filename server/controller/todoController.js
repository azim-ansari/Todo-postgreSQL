const pool = require('../dbConnection/db')
const {handleResponse,handleError} = require('../config/renderer')

module.exports = {
    addTodo: async(req, res) => {
        try {
            const {description} = req.body;
            const newTodo = await pool.query("INSERT INTO todos (description) VALUES($1) RETURNING *",[description])
            return handleResponse({ res, msg: 'Todo Added successfully', data: newTodo.rows[0] })
        } catch (error) {
            console.log("error:::", error);
            return handleError({ res, data: error })
        }
    },
    allTodoList: async(req, res) => {
        try {
            const allTodos = await pool.query("SELECT * FROM todos");
            return handleResponse({ res, msg: 'Todo List fetched successfully', data: allTodos.rows })
        } catch (error) {
            console.log(error.message);
            return handleError({ res, data: error })
        }
    },
    singleTodo: async(req, res) => {
        try {
            const {id} = req.params;
            const singleTodo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
            return handleResponse({ res, msg: 'Single Todo fetched successfully', data: singleTodo.rows })
        } catch (error) {
            console.log(error.message);
            return handleError({ res, data: error })
        }
    },
    updateTodo: async(req, res) => {
        try {
            const {id} = req.params;
            const {description} = req.body;
            await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id]);
            return handleResponse({ res, msg: 'Single Todo fetched successfully'})
        } catch (error) {
            console.log(error.message);
            return handleError({ res, data: error })
        }
    },
    deleteTodo: async(req, res) => {
        try {
            const {id} = req.params;
            await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
            return handleResponse({ res, msg: 'Todo Deleted successfully'})
        } catch (error) {
            console.log(error.message);
            return handleError({ res, data: error })
        }
    }
}