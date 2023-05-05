import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Book from './components/Book'
import './App.css'

function App() {
  

  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/books'  element={<Book/>}/>
    </Routes>
    
    </>    
  )
}

export default App
