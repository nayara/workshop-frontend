import React, { Component } from 'react';

import "./task-list.css"
import Task from '../task/Task';

class TaskList extends Component {
  render(){
    return(
    <div>
      <header className="task-list-title">Notas</header>
      <article className="task-list-box">
        <header>
          <h1 className="task-list-box-title">Área e sala</h1>
        </header>
        <ul className="task-list">
          <Task />
        </ul>
      </article>
    </div>
    );
  };
}
export default TaskList;
