import React, {useState} from "react";

export default function Jokes(props){

    const [isShown ,setIsShown]=useState(false)
    let btntext=isShown ?"Hide punchline":"Show Punchline"
     function toggle(){
        setIsShown(prevState=>!prevState)
        

     }
     

    return(
      
       <div>
         <h3>{props.setup && props.setup}</h3>
         <p>{isShown && props.punchline}</p>
         <button onClick={toggle}>{btntext}</button>
         <hr/>
       </div>
    
    )
}