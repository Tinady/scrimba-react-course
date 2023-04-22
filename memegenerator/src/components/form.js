import React, {useState}from "react";

export default function Forms(){

     const [formData , setFormData]= useState({
        firstName:'', 
        lastName:'',
        Email:'',
        comments:'',
        isFriendly:true
         })
    console.log(formData)
    
     function handleChange (event)
     {
        let {name, value, type, checked}= event.target
        setFormData(prevState=>
            {return {...prevState, 
            [name]: type="checkbox"?checked:value}
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

<textarea  
     onChange={handleChange}
     name="comments"
     value={formData.comments}
/>
<input 
  type="checkbox"
  checked={formData.isFriendly}
  onChange={handleChange}
  name="isFriendly"
  id="isFriendly"
  />
<label htmlFor="isFriendly"> Are u friendly</label>

<fieldset>
     <legend> Current Employment Status</legend>
     <input
     type="radio"
     id="unemployed"/>
     <label htmlFor="unemployed"> Unemployed</label>

     <input
     type="radio"
     id="part-time"/>
     <label htmlFor="part-time">Part-TIme</label>
  
     <input
     type="radio"
     id="full-time"/>
     <label htmlFor="full-time"> Full-Time</label>


</fieldset>
    

</form>)
    
}