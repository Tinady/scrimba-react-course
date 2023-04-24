
import React from "react";
function  MainContent(props){
    const style={
        backgroundColor:props.darkmode?"black":"white",
        color:props.darkmode?"white":"black"
    }

    return(
   <main style={style} className="container">
    <h1 className="main-title">Fun Facts About React</h1>
    <ul className="lists">
        <li>Was first released in 2013</li>
        <li>Was orginally created by Jordan Walke</li>
        <li>Has well over 100k starts on Github</li>
        <li> is mainatained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
   </main>
        )

}

export default MainContent;
