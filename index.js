const express = require('express')
// import * as express from "express";
const app = express();
const todoRouter = require('./src/routes/todoRoutes');
const userRouter = require('./src/routes/userRoutes')
const connectDB = require('./src/helpers/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')

//configure env
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/todos", todoRouter)
app.use("/user", userRouter)
// app.use(express.static(path.join(__dirname, '/frontend/todolist/build')))

// for hosting
// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'todolist', 'build', 'index.html'))
// })

app.get('/', (req, res) => {res.send({welcome: "to the backend!"})})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

