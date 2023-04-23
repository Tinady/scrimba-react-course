import React, {useState} from "react";

export default function signUp ()
{
    const [formData, setFormData]= useState(
        { email:'',
          password:'',
          cpassword:''}
    )


    return (
        <div className="signUp-container">
        <input
          type="email"
          placeholder="hello@company.com"
          value={formData.email}
          name="email"
          onChange={handlechange}/>

        <input
          type="text"
          placeholder="enter your new password"
          value={formData.password}
          name="password"
          onChange={handlechange}/>

        <input
          type="text"
          placeholder="confirm your password"
          value={formData.cpassword}
          name="cpassword"
          onChange={handlechange}/>

        <input
          type="checkbox"
          value={formData.password}
          name="newsletter"
          onChange={handlechange}/>


        </div>
    )
}