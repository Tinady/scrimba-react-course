import React, {useState} from "react";
import Boxes from "./Boxes";

export default  function Square()
{
    const [squareElements, setSquareElements]=useState(Boxes)

    const squareDivs= squareElements.map(sq=>
        {return <div className="squares" key={sq.id}></div>})

    return(
        <div>
            {squareDivs}
        </div>
    )
}

