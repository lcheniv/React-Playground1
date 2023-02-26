import React, { useState } from "react";

// Create a new React project using your preferred tool or platform.
// Create a new file called "TodoList.js" in the "src" directory.
// In TodoList.js, import the React library and the useState hook:

// Define a functional component called "TodoList" that returns a div 
// with an unordered list and a form with an input field and a submit button:


function ToDoList1() {

    const [todos,setToDos] = useState([]);
    const [warning, setWarning] = useState("");
    const [count, setCount] = useState(0);
    var newTodo = "";

    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.elements[0].value !== ""){
            newTodo = event.target.elements[0].value;
            setToDos([...todos, newTodo]);
            event.target.reset();
        } else if (count < 2){
            // console.log("Please enter a value into the text field.");
            setWarning("Please enter a value into the text field.");
            setCount(count + 1);
        } else if (count < 10){
            setWarning("ENTER THE VALUE OR IT WON'T WORK!");
            setCount(count + 1);
        } else {
            setWarning("Your account has now been deactivated.");
            setToDos([]);
        }
    }

    function handleRemove(index) {
        const updatedItems = todos.filter((todo, i) => i !== index);
        setToDos(updatedItems);
    }

    return(
        <div>   
            <ul>
                {todos.map((todo,index) =>( 
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemove(index)}>Remove</button>                    
                    </li>

                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" id="todo" name="todo" placeholder="Add to do list item"/>
                <button type="submit">Add</button>
            </form>

            <h4>
                {warning}
            </h4>

        </div>
    )
       
} export default ToDoList1;