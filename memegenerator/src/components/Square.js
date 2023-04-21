import React, {useState} from "react";
import Boxes from "./Boxes";

export default  function Square(props)
{
    
    
       const [on, setOn]=useState(props.on)

       const Style={
        backgroundColor:on?"black":"transparent",
        borderRadius:on? "0%":"12%" 
    }
        

    return( 
        <div style={Style} onClick={()=>props.handleClick(props.id)} className="squares">  </div>
    )
}

