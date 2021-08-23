/** @format */

const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan');
const pool = require('./dbConnection/db');
const todoRoutes = require('./routes/todo');
const app = express();
require('dotenv').config();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ urlencoded: false }));
app.use('/api', todoRoutes);
//port
const port = process.env.PORT || 5050;

//listen port
app.listen(port, () => {
	console.log(chalk.cyanBright(`Server is running on ${port}`));
});
