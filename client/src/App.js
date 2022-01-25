import React, {useState} from 'react'
import './App.css';
import Board from './Board'
import Keyboard from './Keyboard'

function App() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color: "rgb(129,131,132)"
    }))
  const [letters,setLetters] = useState(alphaArr)
  const [newLetter,setNewLetter] = useState('')
  return (
    <div>
      <header>
        <h1 id="title">WORDLE</h1>
      </header>
      <Board letters={letters} setLetters={setLetters} newLetter={newLetter}/>
      <Keyboard letters={letters} setNewLetter={setNewLetter}/>
    </div>
  );
}

export default App;
