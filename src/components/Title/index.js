import React from "react";
import "./styles.css";

const Title = props => { //you have the variable Title is equal to the props (function) needs arrow functions
return <div className="header">
<div className="title">
<h3>Clicky Game</h3> 
</div>

<div className="scores">
scores: {props.score} highscore: {props.highscore}
</div>
</div>
}
//you wrap the p tag into the div called Title into another div called hHeader. You have a function called Title which is returning the HTML code.
export default Title;