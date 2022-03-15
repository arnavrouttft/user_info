import React from "react";

//import "./Card.module.css";  --> This to to use normal css properties
import classes from "./Card.module.css"; // --> This is to use module css properties

function Card(props) {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>; //This prop (className) can be anything but have to be similar inside the Card component
};

export default Card;
