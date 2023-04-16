const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    }
})

module.exports = mongoose.model("todos", todoSchema)