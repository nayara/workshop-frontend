import React from 'react';

import './task.css'

function Task({ task, index, completeTask }) {
  return(
    <li>
      <label className="task"  style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
        <input type="checkbox" onClick={() => completeTask(index)}/>
        {task.title}
      </label>
    </li>
  );
  
}

export default Task;
