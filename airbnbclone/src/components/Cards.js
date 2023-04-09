import React from "react";
import photo from "../imgs/KatieZ.png"
import star from "../imgs/Star.png"

export default function Cards(props)
{
    let  badgeText
    if (props.data.openSpots===0) {
        badgeText="SOLD OUT"
          }
    else if (props.data.location=="Online")
    {
        badgeText="ONLINE"
    }
    return(
       
        <div className="card-container">
           <img className="cards-img" src={props.data.coverImg}/>
           
            {badgeText &&  <div className="cards-badge"> {badgeText} </div> }
          
          
           <p> <img src={star} 
           className="star"/> <span> {props.data.stats.rating} {props.data.stats.reviewCount}. {props.data.location}</span> </p>
           <p>{props.data.title}</p>
           <p><b> From ${props.data.price}</b> <span>/person</span></p>
        </div>  
    )
     
}