import React from "react";
import "./styles.css";

const Card = (props) => {
    return(
        <div className="card">
        <div className="image-container">
            <img
            src={props.image}
            onClick={()=>props.onClick(props.id)}
            />
        </div>
        </div>
    
    )
}

export default Card;