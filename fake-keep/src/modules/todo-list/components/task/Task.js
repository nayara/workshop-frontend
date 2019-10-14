import React from 'react';

import './task.css'

function Task(props) {
  return(
    <li>
      <label className="task">
        <input type="checkbox" />
        {props.title}
      </label>
    </li>
  );
  
}

export default Task;