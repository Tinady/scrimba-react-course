import React from "react";
import cat from "../imgs/cat.jpg"

export default function Contacts (){
    return(
        <div className="contact-container"> 
            <img className="contact-img" src={cat}/>
          <div className="contact-details">
          <p className="contact-title">MR.Whiskerson</p>
            <p>(212) 555-1234</p>
            <p>mr.whiskaz@catnap.meow</p>
            </div>  
        </div>
    )
}