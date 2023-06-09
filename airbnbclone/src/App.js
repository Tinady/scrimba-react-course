import React from "react";
import Navbar from "./components/nav"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Contacts from "./components/Contacts";
import cat from "./imgs/cat.jpg"
import "./App.css"
import photo1 from "./imgs/KatieZ.png"
import data from "./data";

export default function App(){

   const card= data.map(data=>{
        return<Cards 
        key={data.id}
         data={data} />})
   return(
    <div>
      
         <Navbar/>
        <Hero/>
        <div className="cards-container">
        {card}
        </div>
       
       
        

    
    </div>

   )
} 