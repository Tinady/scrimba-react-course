import React from "react";
import Navbar from "./components/nav"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Contacts from "./components/Contacts";
import cat from "./imgs/cat.jpg"
import "./App.css"
import photo1 from "./imgs/KatieZ.png"

export default function App(){
   return(
    <div>
      
         <Navbar/>
        <Hero/>
        <Cards image={photo1} rating={5.0} review={6}
        title={"Life Lessons with Katie Zaferes"} price={136}/> 
       
        

    
    </div>

   )
} 