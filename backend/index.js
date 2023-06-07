const express = require('express')
// import * as express from "express";
const app = express();
const todoRouter = require('./src/routes/todoRoutes');
const connectDB = require('./src/helpers/db');
const cors = require('cors');
const dotenv = require('dotenv');

//configure env
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/todos", todoRouter)

app.get('/', (req, res) => {
    
    res.send('Welcome to todo list backend!');
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

