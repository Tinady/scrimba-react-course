import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./react-logo.png";

function Header() {
  return(
  <header>
    <nav>
      <img src={logo} alt="" width="40px"/>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>)
}

function MainContent(){
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
  return(
  <footer>
  <small>© 2023 Tina's development. All rights reserved.</small>  
    </footer>)
}

function Page()
{
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
      </div>
      )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);