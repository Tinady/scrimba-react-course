import React from "react";

export default function WindowTracker()
{
    return(
        <div>
          <button>Toggle Window Tracker</button>
          <p>Window size: {window.innerWidth}</p>


        </div>
    )
}