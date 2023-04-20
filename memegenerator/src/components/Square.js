import React, {useState} from "react";
import Boxes from "./Boxes";

export default  function Square(props)
{
    
    
       const [on, setOn]=useState(props.on)

       const Style={
        backgroundColor:on?"black":"transparent",
        borderRadius:on? "0%":"12%" 
    }

     function toggle()
     {
          setOn(prevState=>!prevState)
     }

    return(
        <div style={Style} onClick={toggle} className="squares">  </div>
    )
}

