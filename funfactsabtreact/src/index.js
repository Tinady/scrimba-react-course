import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer"
import MainContent from "./Maincontent"

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