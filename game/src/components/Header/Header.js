import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header bg-secondary">
        <h1 className="title">Clicky Game</h1>
        <div className="lead">Click on an image to earn points, but don't click on an image more than once.</div>
        <h3 className="guessResult">{props.guessResult}</h3>
        <h3 className="score">Score: {props.score} | High Score: {props.highScore}</h3>
    </div>
)

export default Header;