import React, {useState}from "react";

export default function Forms(){

     const [formData , setFormData]= useState({
        firstName:'', 
        lastName:'',
        Email:''
         })
    console.log(formData)
    
     function handleChange (event)
     {
        setFormData(prevState=>
            {return {...prevState, 
                      [event.target.name]:event.target.value}
            })
     }

  return (
  <form  className="form-container" >
    <input
     type="text"
     placeholder="First Name"
     onChange={handleChange}
     name="firstName"
     value={formData.firstName}
     />
      <input
     type="text"
     placeholder="Last Name"
     onChange={handleChange}
     name="lastName"
     value={formData.lastName}
     />

<input
     type="email"
     placeholder="Email"
     onChange={handleChange}
     name="Email"
     value={formData.Email}

     />

</form>)
    
}