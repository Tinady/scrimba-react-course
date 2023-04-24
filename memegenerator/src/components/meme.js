import React, {useState} from "react";
import memeData from "../memeData"

export default function Meme(){

    const [meme, setMeme]=useState(
        {topText:'',
         bottomText:'',
         randomImage:"https://i.imgflip.com/1bgw.jpg"
          })
    

 const [AllMemeImageS, setAllMemeImages]=useState(memeData)

 function getMemeImage() {
    const Data= AllMemeImageS.data.memes;
    let index= Math.floor(Math.random()* Data.length)
    const url= Data[index].url
    setMeme(prevmeme=>({...prevmeme, randomImage:url}))

    console.log(url)

 }

     function  handlechange(event){
        let {name, value}= event.target
         setMeme(prevstate=>
            {return{...prevstate, [name]:value}})
     }

    return(
        <div className="meme-container">
            <div className="meme-input" >
                
                <input className="meme-input1"
                 type="text" 
                 placeholder="Top Text"
                 value={meme.topText}
                  name="topText"
                  onChange={handlechange}/>

                <input className="meme-input2"
                 type="text"
                  placeholder="Bottom Text"
                  value={meme.bottomText}
                   name="bottomText"
                    onChange={handlechange}/>
            </div>

            <button className="btn" onClick={getMemeImage}> Get a new meme image</button>

            <div className="memeimg-container">
                <h3 className="Top-text"> {meme.topText}</h3>
                <img  className="meme-image" src={meme.randomImage}/>
                <h3 className="bottom-text">{meme.bottomText}</h3>
            </div>

        </div>
    )
}