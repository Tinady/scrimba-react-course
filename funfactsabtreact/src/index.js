import React from "react";
import  ReactDOM from "react-dom";

const page=(
  <div>
  <img src="./react-logo.png" width="480px"/>
  <h1>Fun facts about react</h1>
  <ul>
    <li>was first released in 2013</li>
    <li>was orginally created by Jordan Walke</li>
    <li>has well over 100k starts on Github</li>
  </ul>

  </div>
) 

ReactDOM.render(page, document.getElementById("root"))