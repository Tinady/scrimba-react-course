import React from "react";
import Navbar from "./components/nav"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import "./App.css"

export default function App(){
   return(
    <div>
        <Navbar/>
        <Hero/>
        <Cards/>
    </div>

   )
} 