import React from 'react'

const Key = ({letter,color,setNewLetter,setNewGuess,guess}) => {
    const onKeyPress = (e) => {
        setNewLetter(letter)
        if (guess.length < 5) {
            setNewGuess(guess + letter)
        }
    }
    return (
        <div 
            className="Key" 
            onClick={onKeyPress}
            style={{backgroundColor: color}}
        >
            {letter}
        </div>
    )
}

export default Key
