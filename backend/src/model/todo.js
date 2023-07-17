const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    todo: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    }
})

module.exports = mongoose.model("todos", todoSchema)