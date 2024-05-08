import React, { useState } from "react";
import "../../styles/ToDoHeader.css";



const ToDoHeader = ({todos, setTodos}) => {
    const [newTask, setNewTask] = useState("");
    const [idCounter, setIdCounter] = useState(0);

    //controlled input
    const addTask = () => {
        let newTodoObject = {
            id: idCounter, 
            title: newTask,
        };

        // the ... is called spread operator 
        // it expands the array into its elements, and newTodoObject is added at the end of the array
        // it is a way to push into an array
        setTodos([...todos, newTodoObject]);
        setIdCounter(idCounter + 1);
    }

    //text validation
    const checkTextBox = () => {
        let textbox = document.querySelector(".task-input")
        if(textbox.value == "") {
            alert("Please add a task!")
        }
        else {
            addTask();
            setNewTask("");
        }
    }

	return (
		<>
            <header className="header">
			    <h1 className="title">todos</h1>
                <input className="task-input"
                    type="text" 
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                />
                <button 
                    onClick={checkTextBox}
                >Add task</button>
            </header>
		</>
	);
};

export default ToDoHeader;
