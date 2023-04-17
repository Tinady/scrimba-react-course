import React from "react";
import user from  "../imgs/user.png"
import filled from "../imgs/start-filled.jpg"
import empty from "../imgs/start-empty.png"


export default function ContactCard(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
  return(
    <div className="contact-container">
    <img src={user} className="contact-img"/>
    <img src={empty} className="contact-star"/>
    <h3>{contact.firstName} {contact.lastName} </h3>
    <p >{contact.phone} </p>
    <p>{contact.email}  </p>



    </div>
  )
}