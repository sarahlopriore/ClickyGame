import React from "react";

const Header = props => (
    <div className="header">
        <h1 className="title">Clicky Game</h1>
        <h5>Click on an image to earn points, but don't click on an image more than once.</h5>
        <h3 className="guessResult"></h3>
        <h3 className="score"></h3>
        <h3 className="highScore"></h3>
    </div>
)

export default Header;