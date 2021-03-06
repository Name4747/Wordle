import React, {useState} from 'react'
import './App.css';
import Board from './Board'
import Keyboard from './Keyboard'
import StatBox from './StatBox'

function App() {
  const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
  const alphaArr = alphabet
    .split('')
    .map(l => ({
      letter: l,
      color: "rgb(129,131,132)"
    }))
  const loadLetters = JSON.parse(localStorage.getItems("letters")) || alphaArr
  const [letters,setLetters] = useState(loadLetters) // error
  const [newLetter,setNewLetter] = useState('')
  const [newGuess,setNewGuess] = useState('')

  //username, best score, game beaten, games played
  return (
    <div className="App">
      <header>
        <h1 id="title">WERDLE</h1>
      </header>

      

      <Board 
        letters={letters} 
        setLetters={setLetters} 
        newLetter={newLetter}
        newGuess={newGuess}
        setNewGuess={setNewGuess}
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
