import React, {useState} from "react";
import user from  "../imgs/user.png"
import filled from "../imgs/start-filled.jpg"
import empty from "../imgs/start-empty.png"


export default function ContactCard(){
    const [contact, setContact] =useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    const starIcon=contact.isFavorite?filled:empty;

    function Favourite(){
        setContact(prevContact=>{
            return {
                ...prevContact,
                isFavorite:!prevContact.isFavorite
            }
        })
    }
  return(
    <div className="contact-container">
    <img src={user} className="contact-img"/>
    <img src={starIcon} className="contact-star" onClick={Favourite}/>
    <h3>{contact.firstName} {contact.lastName} </h3>
    <p >{contact.phone} </p>
    <p>{contact.email}  </p>



    </div>
  )
}