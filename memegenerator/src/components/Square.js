import React, {useState} from "react";
import Boxes from "./Boxes";

export default  function Square(props)
{
    
    
       

       const Style={
        backgroundColor:props.on?"black":"transparent",
        borderRadius:props.on? "0%":"12%" 
    }
        

    return( 
        <div style={Style} 
        onClick={props.handleClick} 
        className="squares">  </div>
    )
}

