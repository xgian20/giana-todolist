import React, { useState } from "react";
import ToDoFooter from "./ToDoFooter";
import ToDoHeader from "./ToDoHeader";
import ToDoBody from "./ToDoBody";
import "../../styles/ToDoApp.css";



const ToDoApp = () => {
    const [todos, setTodos] = useState([]);

	return (
		<>
            <div className="todos-wrapper">
                <div>
                    <ToDoHeader todos={todos} setTodos={setTodos} />
                </div>
                <div>
                    <ToDoBody todos={todos} setTodos={setTodos} />
                </div>
                <div>
                    <ToDoFooter todos={todos}  />
                </div>
            </div>
		</>
	);
};

export default ToDoApp;
