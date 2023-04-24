import React, {useState} from "react";

import MainContent from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css"



 function App(){
    const[darkMode, setDarkMode]=useState(false)
      function toggle(){
           setDarkMode(prevState=>!prevState)

      }

   return(<div>
     <Navbar darkmode={darkMode} handleclick={toggle}       />
    <MainContent darkmode={darkMode} handleClick={toggle}  />
   
    </div>) 
 }

 export default App;