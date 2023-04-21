import React, {useState} from "react";

export default function Messages() {
   const [messages, setMessages]= useState(['a','b'])

   
   return(
    <div>
        {messages.length==0?<p>You are all caught up!</p>:
        <p> You have {messages.length} unread message{messages.length>1&& "s"}</p>}
    </div>
   )

   
}