const express = require('express')
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan');
const pool = require('./dbConnection/db')
const todoRoutes = require('./routes/todo')
const app = express()
require('dotenv').config();

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({urlencoded:false}))
app.use('/api',todoRoutes)

//ROUTES//

//create a todo

// app.post('/todos', async(req, res) => {
//     try {
//         const {description} = req.body;
//         const newTodo = await pool.query("INSERT INTO todos (description) VALUES($1) RETURNING *",[description])
//         res.json({message:'Todo Added successfully',data:newTodo.rows[0]})
//     } catch (error) {
//         console.log(error.message);
//     }
// })

//get all todo

app.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos");
        res.json({message:'Todo List fetched successfully',data:allTodos.rows});
    } catch (error) {
        console.log(error.message);
    }
})
//get a todo
app.get('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const singleTodo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
        res.json({message:'Single Todo fetched successfully',data:singleTodo.rows});
    } catch (error) {
        console.log(error.message);
    }
})
//update a todo

app.put('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json({message:'Todo Updated successfully'});
    } catch (error) {
        console.log(error.message);
    }
})


//delete a todo
app.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
        res.json({message:'Todo Deleted successfully'});
    } catch (error) {
        console.log(error.message);
    }
})

//port
const port = process.env.PORT || 5050

//listen port
app.listen(port, ()=>{
    console.log(chalk.cyanBright(`Server is running on ${port}`))
})