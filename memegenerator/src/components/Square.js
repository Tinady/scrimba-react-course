import React, {useState} from "react";
import Boxes from "./Boxes";

export default  function Square(props)
{
    const [squareElements, setSquareElements]=useState(Boxes)
     const Style={
        backgroundColor:props.darkMode?"black":"white"
     }

    const squareDivs= squareElements.map(sq=>
        {return <div style={Style} className="squares" key={sq.id}></div>})

    return(
        <div>
            {squareDivs}
        </div>
    )
}

