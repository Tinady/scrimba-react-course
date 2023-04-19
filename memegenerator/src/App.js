import React from 'react';
import Header from './components/Header';
import Meme from './components/meme';
import ContactCard from './components/ContactCard';
import Count from './components/count';
import Square from './components/Square';
import './contact.css'
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Header/>
        <Meme/>  
        <Count/> */
        <Square darkMode={false}/>

        }
        
       </div>
  );
}

export default App;
