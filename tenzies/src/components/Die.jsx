import React from "react";
import "./Container.css"

export default  function Die(props){
    return(
        <p className="die-container">
        {props.value}</p>
       
    )
}