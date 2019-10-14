import React, { useState } from 'react';

import "./task-list.css"
import Task from '../task/Task';

function TaskList () {
  const [taskList] = useState([
    { title: "Learn about React" },
    { title: "Meet friend for lunch" },
    { title: "Build really cool todo app" }
  ]);

  return(
    <div>
      <header className="task-list-title">Notas</header>
      <article className="task-list-box">
        <header>
          <h1 className="task-list-box-title">Área e sala</h1>
        </header>
        <ul className="task-list">
          {
            taskList.map((task, index) => <Task key={index} index={index} title={task.title}/>)
          }
        </ul>
      </article>
    </div>
  );
}
export default TaskList;
