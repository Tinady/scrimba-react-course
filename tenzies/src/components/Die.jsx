import React from "react";
import "./Container.css"

export default  function Die(props){
    return(
        <div  className="die-container">
         <p>{props.value}</p>
        </div>
    )
}