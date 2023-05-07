import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Book from './components/Book'
import BookList from './components/BookList'
import NewBook from './components/NewBook'
import NotFound from './components/NotFound'
import BookLayout from './components/BookLayout'
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
       <Route path='/books' element={<BookLayout/>}>
        <Route index element={<BookList/>}/>
        <Route path=':id' element={<Book/>}/>
        <Route path='new' element={<NewBook/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </>    
  )
}

export default App
