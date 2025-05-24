import React from "react";

function TodoList({todos}){
    return(
        <div>
            
            <ul>
                <p>Lista zadań: </p>
                {todos.map((todo, index)=>(
                    <li key={index}> {todo} </li>
                ))}
            </ul>
        </div>
    )
}


export default TodoList;