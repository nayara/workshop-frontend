import React, { Component } from 'react';

import "./task-list.css"
import Task from '../task/Task';

class TaskList extends Component {
  render(){
    return(
    <article>
      <header>
        <h1 className="task-list-title">Área e sala</h1>
      </header>
      <Task />
    </article>
    );
  };
}
export default TaskList;
