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
    return <tr>
        
    </tr>
}

const Board = ({letters, setLetters, newLetter}) => {
    const [answer,setAnswer] = useState("REACT")
    const [guesses,setGuesses] = useState(["ROBOT"])
    
    const processGuess = (guess) => {
        setGuesses([...guesses,guess])
        guess.split('')
            .forEach((l,i) => {
                let color;
                if (answer.indexOf(l) == i) {
                    color = "green"
                }
                else if (answer.includes(l)) {
                    color = "yellow"
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
            <button onClick={() => {processGuess("READS")}}>test</button>
            <h1>{newLetter}</h1>
        </div>
    )
}

export default Board
