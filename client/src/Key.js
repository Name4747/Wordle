import React from 'react'

const Key = ({letter,color}) => {
    return (
        <div className="key" style={{backgroundColor: color}}>
            {letter}
        </div>
    )
}

export default Key
