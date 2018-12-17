import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img onClick={() => props.onClick(props.id)} id={props.id} alt={props.name} src={props.image} />
        </div>
    </div>
)

export default Card;