import React,{useState} from 'react'

function Cell({letter,color}) {
    return <td style={{backgroundColor: color}}>
            {letter}
        </td>
}

function Row({guess, letters}) {

    return <tr>
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
    </tr>
}

function NewRow({newGuess}) {
    const getBlankCells = (num) => {
        const blankCells = []
        for (let i = 0; i < num; i++) {
            blankCells.push(<Cell
                letter=" "
                color="black"
            />)
        }
        return blankCells
    }
    return <tr>
        {newGuess.split('')
            .map(l => 
                <Cell 
                    letter={l} 
                    color="black"
                />)
        }
        {getBlankCells(5 - newGuess.length)}
    </tr>
}

const Board = ({letters, setLetters, newLetter, newGuess, setNewGuess}) => {
    const [answer,setAnswer] = useState("REACT")
    const [guesses,setGuesses] = useState([""])
    const handleEnter = () => {
        processGuess(newGuess)
        setNewGuess('')
    }

    const processGuess = (guess) => {
        setGuesses([...guesses,guess])
        guess.split('')
            .forEach((l,i) => {
                let color;
                if (answer.indexOf(l) == i) {
                    color = "green"
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
    }
    
    return (
        <div>
            {guesses.map(guess => <Row guess={guess} letters={letters} />)}
            <NewRow newGuess={newGuess} />
            <button onClick={handleEnter}>Enter</button>
            
        </div>
    )
}

export default Board
