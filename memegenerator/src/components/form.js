import React, {useState}from "react";

export default function Forms(){

    const [firstName, setFirstName]=useState('');
    console.log(firstName)
     function handleChange (event)
     {
        setFirstName(event.target.value)
     }

  return (
  <form  className="form-container" >
    <input
     type="text"
     placeholder="First Name"
     onChange={handleChange}
     />

</form>)
    
}