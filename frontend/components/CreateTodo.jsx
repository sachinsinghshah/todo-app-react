import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] =  useState("")
    const [description, setDescription] =  useState("")

    return <div>
        <input type="text" id="title" placeholder="title" style={{padding: 10, margin: 10}} onChange={(e)=> {
            setTitle(e.target.value)
        }}/> <br />
        <input type="text" id="description" placeholder="description" style={{padding: 10, margin: 10}} onChange={(e)=> {
            setDescription(e.target.value)
        }}/> <br />
        <button style={{padding: 10, margin: 10}} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST", 
                headers: {"content-type": "application/json"}, 
                body: JSON.stringify({
                    title: title,
                    description: description
                })} ).then(async (res)=>{
                    const json = await res.json()
                    alert("Todo Added Successfully!")
                })
        }}>
            Add a todo
        </button>
    </div>
}