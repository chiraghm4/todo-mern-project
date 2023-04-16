const express = require('express')
// import * as express from "express";
const app = express();
const todoRouter = require('./src/routes/todoRoutes');
const connectDB = require('./src/helpers/db');
const cors = require('cors');
connectDB();

app.use(cors());
app.use(express.json());
app.use("/todos", todoRouter)

app.get('/', (req, res) => {
    
    res.send('Welcome to todo list!');
})

app.listen(8000, () => console.log("listening on http://localhost:8000"));

