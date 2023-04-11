import React from "react";
import logo from "../imgs/TrollFaceLogo.png"

export default function Header(){
    return(
        <div className="header">
            <div className="logo-container">
                <img src={logo} className="img-logo" /> 
                <h1 className="logo-text">  Meme Generator</h1>
            </div>

            <p className="project-title"> React Course-Project 3</p>



        </div>
    )
}