 import React, {useState} from 'react';
import Header from './components/Header';
import Meme from './components/meme';
import ContactCard from './components/ContactCard';
import Count from './components/count';
import Square from './components/Square';
import Boxes from './components/Boxes';
import jokeData from './components/jokeData';
import Jokes from './components/joke';
import './contact.css'
import './App.css';

export default function App() {

  // const [boxes, setBoxes]=useState(Boxes)
  
  // function toggle(id){
  //        setBoxes(prevstate=>
  //         {return prevstate.map((square)=>{
  //           return square.id==id?{...square, on:!square.on}:square;
  //        })})

  //   }


  // const squareDivs=boxes.map(sq=>
  //     (<Square
  //       key={sq.id}
  //       on={sq.on} 
  //       handleClick={()=>toggle(sq.id)}
  //        />
  //        ))

    const jokeelements= jokeData.map((j)=>
    {return <Jokes
         key={j.id}
          setup={j.setup}
          pinchline={j.punchline}
             />})
         
  return (
    <div className="App">
        {/* <Header/>
        <Meme/>  
        <Count/> 
        {squareDivs} */}
        {jokeelements}

        
        
       </div>
  );
}


