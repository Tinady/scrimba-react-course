 import React, {useState} from 'react';
import Header from './components/Header';
import Meme from './components/meme';
import ContactCard from './components/ContactCard';
import Count from './components/count';
import Square from './components/Square';
import Boxes from './components/Boxes';
import './contact.css'
import './App.css';

export default function App() {

  const [boxes, setBoxes]=useState(Boxes)
  
  function toggle(id){
     
    setBoxes(prevState=>
      {return prevState.map((square)=>
        {return square.id===id?{...prevState, 
          on:!square.on}:{...prevState}})
      }
      
    )

    console.log(id)

    }


  const squareDivs=boxes.map(sq=>
      (<Square handleClick={toggle} 
        key={sq.id}
        on={sq.on} 
        id={sq.id}/>))
  return (
    <div className="App">
        {/* <Header/>
        <Meme/>  
        <Count/> */}
        {squareDivs}

        
        
       </div>
  );
}


