import React, {useState} from "react";

export default function Jokes(props){

    const [isShown ,setIsShown]=useState(false)
     function toggle(){
        setIsShown(prevState=>!prevState)
        console.log(isShown)

     }
     

    return(
      
       <div>
         {props.setup && <h3>{props.setup}</h3>}
         <p>{isShown && props.punchline}</p>
         <button onClick={toggle}>Show</button>
         <hr/>
       </div>
    
    )
}