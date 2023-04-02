import React from "react";
import logo from "../imgs/Groupimage.png"

export default function Hero(){
    return(
        <div > 
            <img  className="grp-img" src={logo}/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}