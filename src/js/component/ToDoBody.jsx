import React, { useEffect, useState } from "react";
import "../../styles/ToDoBody.css";

//delete button should only show on hover 


const ToDoBody = ({todos, setTodos}) => {

    // useEffect ->  allows us to synchronize components with an external system
    // we can use useEffect to make a fetch call and retrieve our todo list
    
    // useEffect has 2 parameters, callback function and dependency array
    // the callback function will be where we use our fetch call and process the response
    // the dependency array is used to determine how the browser will re-render information

    useEffect(() => {
        fetch('https://playground.4geeks.com/todo/users/giana')
        .then(response => response.json())
        .then(data => {
            setTodos(data.todos)
        })
        .catch(error => console.log("Error: ", error))
    }, []) 

    // create a useEffect to re-render a task

    // create a useEffect to delete a task

    const deleteData = async (todoId) => {
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Assuming a successful DELETE request returns an empty response
            return { success: true };
        } else {
            console.log('Error:', response.status, response.statusText);
            return { error: { status: response.status, statusText: response.statusText } };
        }
    };

    const handleDelete = (todoId) => {
        deleteData(todoId)
            .then(data => {
                if (data.success) {
                    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
                } else {
                    console.error('Failed to delete todo:', data.error.statusText);
                }
            })
            .catch(error => {
                console.error('Error deleting todo:', error);
            });
    };

    const deleteTask = (selectedTodoId) => {
        let updatedTodos = todos.filter(todo => todo.id !== selectedTodoId);
        setTodos(updatedTodos);
    }

    let renderTasks = todos.map( todo => {
        return (
            <li key={todo.id} className="task-item">
                <span className="task">{todo.label}{todo.title} </span>
                <button> 
                    <svg onClick={() => handleDelete(todo.id)} onClickCapture={() => deleteTask(todo.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill trash-can" viewBox="0 0 16 16"> 
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/> 
                    </svg> 
	            </button> 
            </li>
        );
    })

	return (
		<>
			<section className="main">
                <ul className="task-list">
                    {todos.length !== 0 ? renderTasks : "No tasks. Add a task."}
                </ul>
            </section>
		</>
	);
};

export default ToDoBody;
