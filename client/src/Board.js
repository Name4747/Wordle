import React,{useState} from 'react'

function Cell({letter,color}) {
    return <td style={{backgroundColor: color}}>
        {letter}
    </td>
}

function Row({guess}) {
    return <tr>
        {guess.split('')
            .map(l => <Cell letter={l} color={"blue"}/>)
        }
    </tr>
}

const Board = () => {
    const [answer,setAnswer] = useState("REACT")
    const [guesses,setGuesses] = useState(["ROBOT"])
    return (
        <div>
            <Row guess={guesses[0]}/>
        </div>
    )
}

export default Board
