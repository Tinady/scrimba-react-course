import React from "react";
import photo from "../imgs/KatieZ.png"

export default function Cards()
{
    return(
        <div className="card-container">
           <img className="cards-img" src={photo}/>
           <div className="cards-sold"> 
           <p > Sold out</p>
           </div>
          
           <p>&bigstar 5.0 (6). USA</p>
           <p>Life lessons with Katie Zaferes</p>
           <p> From $316/person</p>
        </div>
    )
}