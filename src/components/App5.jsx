import React from "react";
import { useState } from "react";
export default function App5() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();
  const handleSubmit = () => {
    setTodos([...todos, task]);
  };
  const handleDelete = (task) =>{
    setTodos(todos.filter((value) =>task !== value));
  }
  return (
    <div>
      <h3>This is App5</h3>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleSubmit}>submit</button>
      <hr />
      {todos.map((val, index) => (
        <li key={index}>
          {val} - <button onClick={() => handleDelete(val)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
