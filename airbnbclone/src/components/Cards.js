import React from "react";
import photo from "../imgs/KatieZ.png"
import star from "../imgs/Star.png"

export default function Cards()
{
    return(
        <div>
        <div className="card-container">
           <img className="cards-img" src={photo}/>
           <div className="cards-sold"> 
           <p > SOLD OUT </p>
           </div>
          
           <p> <img src={star} className="star"/> <span>5.0 (6). USA</span> </p>
           <p>Life lessons with Katie Zaferes</p>
           <p><b> From $316</b> <span>/person</span></p>
        </div>  
        </div>
    )
}