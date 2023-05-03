import React from "react";
import ".Container/Container.css"

export default  function Die(props){
    return(
        <div className="die-container">
        {props.value}</div>
       
    )
}