import React from 'react';
import Header from '../header/Header';
import NavBar from '../navbar/Navbar';
import TaskList from '../todo-list/components/task-list/TaskList';

import "./app.css";

function App() {
  return (
    <div className="app-header">
      <Header />
      <NavBar titles={["Notas", "Criar Nota"]}/>
        <div className="app-main">
          <TaskList title="Notas"/>
        </div>
    </div>
  );
}

export default App;
