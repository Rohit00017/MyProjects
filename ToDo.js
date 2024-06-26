import React, { useState } from 'react';
import './ToDo.css'



function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks To Do</h1>
        <div>
          <input
            type="text" value={inputValue} onChange={handleInputChange}  placeholder="Add your new task"
          />
          <button onClick={handleAddTask}> Add Task </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}> Done </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ToDo;
