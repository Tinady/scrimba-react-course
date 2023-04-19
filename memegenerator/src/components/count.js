import React, {useState} from "react";

export default  function Count(){

   
    
    const [count, setCount]=useState(0)
     function Add(){
        setCount(prevcount=>prevcount+1)
     }

     function substract(){
        setCount(prevcount=>prevcount-1)
     }
    return(
        <div className="count-container">
               <button className="counter-minus" onClick={substract}>-</button>
              <div className="count">
              <h1>{count}</h1>
              </div>
              
              <button className="counter-plus" onClick={Add}>+</button>

        </div>
    )
}