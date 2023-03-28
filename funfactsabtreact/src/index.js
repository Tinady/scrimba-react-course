import React from 'react';
import ReactDOM from 'react-dom/client';

const navBar=(
  <nav>
    <h1>Tina's List</h1>
    <li>hi</li>
    <li>hey</li>
    <li>hello</li>
  </nav>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  navBar
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

