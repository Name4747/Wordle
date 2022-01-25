import React from 'react'

const Key = ({letter,color,setNewLetter,setNewGuess,guess}) => {
    const onKeyPress = (e) => {
        setNewLetter(letter)
        setNewGuess(guess + letter)
    }
    return (
        <div 
            className="key" 
            onClick={onKeyPress}
            style={{backgroundColor: color}}
        >
            {letter}
        </div>
    )
}

export default Key
