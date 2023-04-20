import React, {useState} from 'react';
import Header from './components/Header';
import Meme from './components/meme';
import ContactCard from './components/ContactCard';
import Count from './components/count';
import Square from './components/Square';
import Boxes from './components/Boxes';
import './contact.css'
import './App.css';

function App() {

  const [boxes, setBoxes]=useState(Boxes)

  
 
  const squareDivs=Boxes.map(sq=>
      (<Square on={boxes.on} key={sq.id}/>))
  return (
    <div className="App">
        {/* <Header/>
        <Meme/>  
        <Count/> */}
        {squareDivs}

        
        
       </div>
  );
}

export default App;
