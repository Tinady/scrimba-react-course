import React from "react";
import logo from "../imgs/react-logo.png"

function  Navbar(props){

    


    return( 

       <nav className={props.darkmode?"dark":""}>
       <img src={logo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
          
          <div className="toggle-container">
               
               <div className="toggle-circle"></div>
               <div className="toggle-slider"
                onClick={props.handleClick}> </div>
              
              
               
               </div>
          
            
      </nav>
    )

   
   }
   
   export default Navbar;