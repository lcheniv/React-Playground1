import React, { useState } from "react";
import './ToDoList1.css';


// Create a new React project using your preferred tool or platform.
// Create a new file called "TodoList.js" in the "src" directory.
// In TodoList.js, import the React library and the useState hook:

// Define a functional component called "TodoList" that returns a div 
// with an unordered list and a form with an input field and a submit button:


function ToDoList1() {
    const [todos,setToDos] = useState([]);
    const [warning, setWarning] = useState("");
    const [charLimitWarning, setCharLimitWarning] = useState("");
    const [repeatWarning, setRepeatWarning] = useState("");
    const [count, setCount] = useState(0);
    var newTodo = "";

    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.elements[0].value !== "") {
            newTodo = event.target.elements[0].value;
            setToDos([...todos, newTodo]);
            event.target.reset();
        } else if (newTodo.value === ""){
            setCharLimitWarning("Please enter a value into the text field.");
        } else if (count < 10){
            setWarning("ENTER THE VALUE OR IT WON'T WORK!");
            setCount(count + 1);
        } else {
            setWarning("");
            setToDos([]);
            setCount(0);
        }
    }

    function handleRemove(index) {
        const updatedItems = todos.filter((todo, i) => i !== index);
        setToDos(updatedItems);
    }

    // When the todo item is checked, change the text color from white to green
    function handleTodoComplete(todo) {
        console.log("worked");
    }


    return(
        <div>   
            
            <form onSubmit={handleSubmit}>
                <input type="text" id="todo" name="todo" placeholder="Add to do list item"/>
                <button type="submit">Add</button>
            </form>

            {/* <div className="test">
                <p id="title">To do list item must contain the following:</p>
                <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                <p id="number" class="invalid">A <b>number</b></p>
                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
            </div> */}

            <ul className="list-item">
                {todos.map((todo,index) =>( 
                    <li key={index}>
                        {todo}
                        <button className="complete" onClick={() => handleRemove(index)}>Mark Task as Complete</button>                    
                    </li>
                ))}
            </ul>

        </div>
    )
       
} export default ToDoList1;