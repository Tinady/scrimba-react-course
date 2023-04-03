import React from "react";


export default function Contacts (props){
    return(
        <div className="contact-container"> 
            <img className="contact-img" src={props.img}/>
          <div className="contact-details">
          <p className="contact-title">MR.Whiskerson</p>
            <p>(212) 555-1234</p>
            <p>mr.whiskaz@catnap.meow</p>
            </div>  
        </div>
    )
}