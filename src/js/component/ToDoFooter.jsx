import React from "react";

//display how many tasks left, 0 to infinity 

const ToDoFooter = ({todos}) => {
	
	return (
		<>
			<footer className="footer">
                {
					todos.length !== 1 ? `${todos.length} items left.`
					:
					`${todos.length} item left.` 
				}
            </footer>
		</>
	);
};

export default ToDoFooter;
