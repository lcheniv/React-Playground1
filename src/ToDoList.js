import React, { useState } from "react";
import './ToDoList.css';

function ToDoList() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  function handleAddItem() {
    if (newItemText.trim() === "") {
      return;
    }
    const newItem = { id: Date.now(), text: newItemText, completed: false };
    setItems([...items, newItem]);
    setNewItemText("");
  }

  function handleDeleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  }

  function handleCompleteItem(itemId) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function handleEditItem(itemId, newText) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function handleEditButtonClick(itemId) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, editing: true };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function handleSaveButtonClick(itemId, event) {
    event.preventDefault();
    const input = event.target.querySelector("input");
    const newText = input.value.trim();
    if (newText === "") {
      return;
    }
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, text: newText, editing: false };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function handleCancelEditButtonClick(itemId) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, editing: false };
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.editing ? (
              <form onSubmit={(event) => handleSaveButtonClick(item.id, event)}>
                <input type="text" defaultValue={item.text} />
                <button type="submit">Save</button>
                <button type="button" onClick={() => handleCancelEditButtonClick(item.id)}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <label>
                  <input type="checkbox" checked={item.completed} onChange={() => handleCompleteItem(item.id)} />
                  <span className={item.completed ? "completed" : ""}>{item.text}</span>
                </label>
                <button onClick={() => handleEditButtonClick(item.id)}>Edit</button>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newItemText} onChange={(event) => setNewItemText(event.target.value)} />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ToDoList;
