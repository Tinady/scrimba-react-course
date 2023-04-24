import React from "react";
import logo from "../imgs/react-logo.png"

function  Navbar(props){

    const Style={
         backgroundColor:props.darkmode?"black":"white"
    }


    return( 

       <nav style={Style}>
       <img src={logo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
            <input type="checkbox"
                   onClick={props.handleClick}
                   id="checkBox"
                   className="toggle"
                   />
          <label htmlFor="checkBox"></label>
          

      </nav>
    )

   
   }
   
   export default Navbar;