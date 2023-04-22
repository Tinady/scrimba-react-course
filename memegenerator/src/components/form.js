import React, {useState}from "react";

export default function Forms(){

     const [formData , setFormData]= useState({
        firstName:'', 
        lastName:'',
        Email:'',
        comments:'',
        isFriendly:true,
        employment:''
         })
    console.log(formData)
    
     function handleChange (event)
     {
        let {name, value, type, checked}= event.target
        setFormData(prevState=>
            {return {...prevState, 
            [name]: type==="checkbox"?checked:value}
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
    
     <label htmlFor="unemployed">
     <input
     type="radio"
     id="unemployed"
     name="employment"
     value={'unemployed'}
     checked={formData.employment=== 'unemployed'}
     onClick={handleChange}
     />
     Unemployed</label>

     
     <label htmlFor="part-time">
     <input
     type="radio"
     id="part-time"
     name="employment"
     value={'part-time'}
     checked={formData.employment=== 'part-time'}
     onClick={handleChange}
     />
          Part-TIme</label>
  
    
     <label htmlFor="full-time">
          <input
           type="radio"
           id="full-time"
           name="employment"
           value={'full-time'}
           checked={formData.employment=== 'full-time'}
          onClick={handleChange}
           />
           Full-Time</label>


</fieldset>
    

</form>)
    
}