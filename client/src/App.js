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
  const [newGuess,setNewGuess] = useState('')
  return (
    <div>
      <header>
        <h1 id="title">WORDLE</h1>
      </header>

      <Board 
        letters={letters} 
        setLetters={setLetters} 
        newLetter={newLetter}
        newGuess={newGuess}
      />

      <Keyboard 
        letters={letters} 
        setNewLetter={setNewLetter} 
        setNewGuess={setNewGuess}
        guess={newGuess}
      />

    </div>
  );
}

export default App;
