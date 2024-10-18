const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs!"
        })
        return
    }
    // else it will add it to mogodb database
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created!"
    })
    
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find()
    res.json(
        {todos}
    )
})

app.post("/completed", async function(req, res) {
 const updatePayload = req.body
 const parsedPayload = updateTodo.safeParse(updatePayload)
 if(!parsedPayload.success){
    res.status(411).json({
        msg: "You have sent wrong inputs!"
    })
    return
 }
 await todo.findByIdAndUpdate(req.body.id, {completed: true})
 res.json({
    msg: "Todo marked as completed"
})
})

app.listen(3000)
