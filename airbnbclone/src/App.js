import React from "react";
import Navbar from "./components/nav"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Contacts from "./components/Contacts";
import cat from "./imgs/cat.jpg"
import "./App.css"

export default function App(){
   return(
    <div>
        {
        /* <Navbar/>
        <Hero/>
        <Cards/> */
       
          <div className="contact-cards">
         <Contacts img={cat}/>
          <Contacts img={cat}/>
          <Contacts img={cat}/>
          <Contacts img={cat}/>
            </div>

        }
    </div>

   )
} 