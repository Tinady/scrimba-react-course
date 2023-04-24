import { useEffect } from "react";
import React, {useState} from "react";


export default function Meme(){

    const [meme, setMeme]=useState(
        {topText:'',
         bottomText:'',
         randomImage:"https://i.imgflip.com/1bgw.jpg"
          })
          const [AllMemeData, setAllMemeData]=useState()

    useEffect(()=>{
         fetch("https://api.imgflip.com/get_memes")
         .then(res=>res.json())
         .then(info=>setAllMemeData(info.data.memes))
    }, [])
    

 

 function getMemeImage() {
    
    let index= Math.floor(Math.random()* AllMemeData.length)
    const url= AllMemeData[index].url
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
                    onChange={handlechange    }/>
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