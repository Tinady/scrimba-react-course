import React from "react";
import ReactDOM  from "react-dom";
import logo from "./logo.svg";

function FirstFunction(){
return(
  <div>
    <img src={logo} alt="react logo">
      <h1> Funfacts abt react</h1>
      <ul>
        <li>hi</li>
        <li>hey</li>
        <li>hello</li>
      </ul>
    </img>
  </div>
)
}

ReactDOM.render(<FirstFunction/>,document.getElementById("root"))