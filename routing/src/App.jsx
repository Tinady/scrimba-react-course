import React from 'react'
import { NavLink,Link, Route, Routes } from 'react-router-dom'
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
        <li><NavLink to='/'style={({isActive})=>{
         return isActive?{color:'black'}:{}
        }}>Home</NavLink></li>
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
