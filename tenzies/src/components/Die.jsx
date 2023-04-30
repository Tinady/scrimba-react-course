import React from "react";
import "./Container.css"

export default  function Die(props){
    return(
        <div  className="die-container">
         <div>{props.value}</div>
        </div>
    )
}