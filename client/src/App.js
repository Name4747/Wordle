import React from 'react'
import './App.css';
import Board from './Board'
import Keyboard from './Keyboard'

function App() {
  return (
    <div>
      <header>
        <h1>Wardle</h1>
      </header>
      <Board/>
      <Keyboard/>
    </div>
  );
}

export default App;
