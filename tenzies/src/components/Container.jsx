import React from "react";
import Die from "./Die";
import "./Container.css"

export default function Container(){
    const nums= [1,2,3,4,5,6,7,8,9,10]
    

    const D= nums.map((num)=>
       {return <Die key={num} value={num}/>
      }
       )

       return(
        <div className="container">
         {D}
       </div>
       )
}