import React from 'react';
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar titles={["Notas", "Criar Nota"]}/>
    </div>
  );
}

export default App;
