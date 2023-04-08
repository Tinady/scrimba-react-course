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
        image={data.coverImg}
        review={data.stats.reviewCount} rating={data.stats.rating}
        title={data.title} price={data.price} 
        openSpot={data.openSpots}
        location={data.location}/>})
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