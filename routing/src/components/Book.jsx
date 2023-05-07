import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Book(){
   const {id}=useParams()
   
 return(
 
    <h1>Book {id} </h1>
 )
}