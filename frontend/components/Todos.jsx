/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}