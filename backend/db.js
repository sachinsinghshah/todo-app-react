const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://sachinsinghshah:sss12345@mongosss.0ynhdax.mongodb.net/todo_list")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean 
})

const todo = mongoose.model("todos", todoSchema)

module.exports = { todo } 