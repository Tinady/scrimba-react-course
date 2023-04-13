import React from "react";
import memeData from "../memeData"

export default function Meme(){
const Data= memeData.data.memes;
let index= Math.floor(Math.random()* Data.length)
const url= Data[index].url


console.log(url)
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