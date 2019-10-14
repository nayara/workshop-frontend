import React, { useState } from 'react';

import './task-list.css';
import Task from '../task/Task';

function TaskList() {
  const [taskList, setTasks] = useState([
    { 
      title: 'Varrer a Sala',
      isCompleted: false,
    },
    { 
      title: 'Verificar o lixo',
      isCompleted: false,
    },
    {
      title: 'Abrir as janelas',
      isCompleted: false,
    },
  ]);

  const completeTask = index => {
    const newTaskList = [...taskList];
    newTaskList[index].isCompleted = true;
     setTasks(newTaskList);
  }

  return (
    <div>
      <header className="task-list-title">Notas</header>
      <article className="task-list-box">
        <header>
          <h1 className="task-list-box-title">Área e sala</h1>
        </header>
        <ul className="task-list">
          {taskList.map((task, index) => (
            <Task key={index} index={index} task={task} completeTask={completeTask} />
          ))}
        </ul>
      </article>
    </div>
  );
}
export default TaskList;
