import React from 'react';
import Header from './components/Header';
import Meme from './components/meme';
import ContactCard from './components/ContactCard';
import './contact.css'
import './App.css';

function App() {
  return (
    <div className="App">
       {/* <Header/>
       <Meme/> */
       <ContactCard/>
       }

    </div>
  );
}

export default App;
