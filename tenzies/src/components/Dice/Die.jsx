import React from "react";
import "./Container.css"

export default  function Die(props){
    return(
        <h2 className="die-container">
        {props.value}</h2>
       
    )
}