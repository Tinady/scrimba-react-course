import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function BookLayout(){
    return(
        <>
        <Link to='/books/1' replace>Book 1</Link>
        <br/>
        <Link to='/books/2' replace>Book 2 </Link>
        <br/>
        <Link to='/books/new'>New Books</Link>
        <Outlet />
        </>
        )
}