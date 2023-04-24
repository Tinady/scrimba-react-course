import React, {useState, useEffect}from "react";

export default function WindowTracker()
{
     const [windowWidth, setWindowWidth]=useState(window.innerWidth)
        useEffect(()=>
          {window.addEventListener("resize", ()=>
            {setWindowWidth(window.innerWidth)})},[]
          )

    return(
        <div>
          <button>Toggle Window Tracker</button>
          <p>Window size: {windowWidth}</p>


        </div>
    )
}