import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name'/>
            </div>

            <div className="input">
                <label htmlFor="email">Email: </label>
                <input type="email"  placeholder='Email'/>
            </div>

            <div className="input">
                <label htmlFor="password">Password: </label>
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="forgot-password">Lost password? <span>Click Here!</span></div>

        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="Login"> Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignup
