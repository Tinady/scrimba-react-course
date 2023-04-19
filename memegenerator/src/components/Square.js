import React, {useState} from "react";
import Boxes from "./Boxes";

export default  function Square()
{
    const [on, setOn]=useState(Boxes.on)

    function toggle(){
         setOn(prevState=>!prevState)
    }

    const Style={
        backgroundColor:on?"black":"transparent"
    }
    const squareDivs=Boxes.map(sq=>
        {return <div style={Style} onClick={toggle
        } className="squares" key={sq.id}></div>})

    return(
        <div>
            {squareDivs}
        </div>
    )
}

