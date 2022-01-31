import React,{useState} from 'react'

function Cell({letter,color}) {
    return <div className="Cell" style={{backgroundColor: color}}>
            {letter}
        </div>
}

function Row({guess, letters}) {

    return <div>
        {guess.split('')
            .map(l => 
                <Cell 
                    letter={l} 
                    color={
                        letters.find(letterData => letterData.letter == l)
                        .color
                    }
                />)
        }
    </div>
}

function NewRow({newGuess}) {
    const getBlankCells = (num) => {
        const blankCells = []
        for (let i = 0; i < num; i++) {
            blankCells.push(<Cell
                letter=" "
                color="rgb(18,18,19)"
            />)
        }
        return blankCells
    }
    return <tr>
        {newGuess.split('')
            .map(l => 
                <Cell 
                    letter={l} 
                    color="rgb(18,18,19)"
                />)
        }
        {getBlankCells(5 - newGuess.length)}
    </tr>
}

const Board = ({letters, setLetters, newLetter, newGuess, setNewGuess}) => {
    const [answer,setAnswer] = useState("REACT")
    const loadGuesses = JSON.parse(localStorage.getItem("guesses")) || []
    const [guesses,setGuesses] = useState(loadGuesses)
    const handleEnter = () => {
        if (newGuess.length == 5) {
            processGuess(newGuess)
            setNewGuess('')
            localStorage.setItem("guesses",JSON.stringify([...guesses,newGuess]))
        }
        
    }

    const processGuess = (guess) => {
        setGuesses([...guesses,guess])
        guess.split('')
            .forEach((l,i) => {
                let color;
                if (answer.indexOf(l) == i) {
                    color = "rgb(83,141,78)"
                }
                else if (answer.includes(l)) {
                    color = "rgb(181,159,59)"
                }
                else {
                    color = "rgb(29, 29, 31)"
                }
                const index = letters.findIndex(letterData => letterData.letter == l)
                letters[index].color = color
            })
        setLetters([...letters])
        localStorage.setItem[index].color = color
    }
    
    return (
        <div>
            {guesses.map(guess => <Row guess={guess} letters={letters} />)}
            <NewRow newGuess={newGuess} />
            <button 
                onClick={handleEnter}
                disabled={newGuess.length != 5}
            >Enter</button>
            
        </div>
    )
}

export default Board
