import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

    const[action, setaction]= useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
                <label htmlFor="Name">Name: </label>
                <input type="text"  placeholder='Name' className='secondinput'/>
            </div>}
            <div className="input">
                <label htmlFor="email">Email: </label>
                <input type="email"  placeholder='Email' className='secondinputs'/>
            </div>

            <div className="input">
                <label htmlFor="password">Password: </label>
                <input type="password" placeholder='Password' className='secondinput'/>
            </div>
        </div>

        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password? 
            <span>Click Here!</span></div>}
        

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}> Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignup
