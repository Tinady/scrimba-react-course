import React from "react";

export default function Meme()
{
    return(
        <div className="meme-container">
            <div className="meme-input" >
                
                <input className="meme-input1" type="text" placeholder="Top Text"/>
                <input className="meme-input2" type="text" placeholder="Bottom Text"/>
            </div>

            <button className="btn"> Get a new meme image</button>

        </div>
    )
}