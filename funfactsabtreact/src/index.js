import React from "react";
import ReactDOM  from "react-dom";
import logo from "./react-logo.png";

function FirstFunction(){
return(
  <div>
   
      <header>
        <navbar>
        <img src={logo} alt="react logo" width="40px"/>

        </navbar>
      </header>
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

ReactDOM.render(<FirstFunction/>,document.getElementById("root"))