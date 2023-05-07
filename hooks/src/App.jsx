import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
  const [windowWidth, setWindowWidth]=useState(window.innerWidth)
  
  function HandleResize(){
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(()=>
  {window.addEventListener('resize',HandleResize),
   [windowWidth]})
  
  return (
    <>
     {windowWidth}
      
    </>
  )
}

export default App
