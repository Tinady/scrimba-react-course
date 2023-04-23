import React, {useState} from "react";

export default function SignUp ()
{
    const [formData, setFormData]= useState(
        { email:'',
          password:'',
          cpassword:'',
          join:true}
    )

    function handleChange(event){
        let {name, value, type, checked}=event.target
       setFormData(prevstate=>
        {
            return{...prevstate,[name]:type==="checkbox"?checked:value }
        }
       )

    }
    
    function handleSubmit(event)
    {
            event.preventDefault()
            console.log("hey")
            formData.password===formData.cpassword?console.log("the passwords match"):console.log("the passwords dont match");
    }

    return (
        <div className="signUp-container">

        <form>
        <input
          type="email"
          placeholder="hello@company.com"
          value={formData.email}
          name="email"
          onChange={handleChange}/>

        <input
          type="text"
          placeholder="enter your new password"
          value={formData.password}
          name="password"
          onChange={handleChange}/>

        <input
          type="text"
          placeholder="confirm your password"
          value={formData.cpassword}
          name="cpassword"
          onChange={handleChange}/>

       <label> <input
          type="checkbox"
          checked={formData.join}
          name="join"
          onChange={handleChange}/>
          I want to join the newsletter
          </label>

        <button onClick={handleSubmit}>Sign up</button>
        </form>


        </div>
    )
}