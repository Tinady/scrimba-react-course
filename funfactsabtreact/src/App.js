import React, {useState} from "react";

import MainContent from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css"



 function App(){
    const[darkMode, setDarkMode]=useState(true)
      function toggle(){
           setDarkMode(prevState=>!prevState)

      }

   return(<div>
     <Navbar darkmode={darkMode} handleClick={toggle}       />
    <MainContent darkmode={darkMode} />
   
    </div>) 
 }

 export default App;