import React, {useState} from "react";
import memeData from "../memeData"

export default function Meme(){

 const [memeImage, setMemeImage]=useState("https://i.imgflip.com/1bgw.jpg")

 function getMemeImage() {
    const Data= memeData.data.memes;
    let index= Math.floor(Math.random()* Data.length)
    const url= Data[index].url
    setMemeImage(url)

    console.log(url)

 }

    return(
        <div className="meme-container">
            <div className="meme-input" >
                
                <input className="meme-input1" type="text" placeholder="Top Text"/>
                <input className="meme-input2" type="text" placeholder="Bottom Text"/>
            </div>

            <button className="btn" onClick={getMemeImage}> Get a new meme image</button>

            <div className="memeimg-container">
                <img  className="meme-image" src={memeImage}/>
            </div>

        </div>
    )
}