import React from "react";
import photo from "../imgs/KatieZ.png"
import star from "../imgs/Star.png"

export default function Cards(props)
{
    return(
       
        <div className="card-container">
           <img className="cards-img" src={props.image}/>
           <div className="cards-sold"> 
           <p > SOLD OUT </p>
           </div>
          
           <p> <img src={star} 
           className="star"/> <span> {props.rating} {props.review}. {props.location}</span> </p>
           <p>{props.title}</p>
           <p><b> From ${props.price}</b> <span>/person</span></p>
        </div>  
    )
     
}