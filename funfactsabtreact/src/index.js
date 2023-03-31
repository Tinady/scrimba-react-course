import React from "react";
import ReactDOM  from "react-dom";
import logo from "./react-logo.png";

function HeaderPage(){
  <header>
    <nav>
      <img src={logo}/>
    </nav>
  </header>
}

function MainPage(){
return(
  <div>
   
     
      <ul>
        <li>It is composable</li>
        <li>  It is declarative</li>
        <li>It is well known</li>
      </ul>
      <footer>
    <small>© 2023 Tina's development. All rights reserved.</small>  
      </footer>

  </div>
)
}


ReactDOM.render(<MainPage/>,document.getElementById("root"))