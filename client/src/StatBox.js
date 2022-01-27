import React from 'react'

const StatBox = () => {
    return (
        <div id="stats">
            <h3>STATISTICS</h3>
            <input id="username"></input>
            <input id="loginButton" type="submit" value="Login"></input>
            <br/>
            <span>Username:</span>
            <br/>
            <span>Best Score:</span>
            <br/>
            <span>Games Beaten:</span>
            <br/>
            <span>Games Played:</span>
        </div>
    )
}

export default StatBox
