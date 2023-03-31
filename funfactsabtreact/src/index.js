import React from "react";
import ReactDOM  from "react-dom";
import logo from "./react-logo.png";

function Header(){
  <header>
    <nav>
      <img src={logo} alt=""/>
    </nav>
  </header>
}

function MainPage(){
return(
  <div>
   
        <h1>Fun Facts about react</h1>
     
      <ul>
        <li>It is composable</li>
        <li>  It is declarative</li>
        <li>It is well known</li>
      </ul>
    

  </div>
)
}

function Footer(){
  <footer>
  <small>© 2023 Tina's development. All rights reserved.</small>  
    </footer>
}

function Page()
{
  return(
    <div>
      <Header />
      <MainPage />
      <Footer />
      </div>


  )
}


ReactDOM.render(<Page/>,document.getElementById("root"))