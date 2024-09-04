import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <div className='signupform'>
          <label htmlFor="name">Enter Your Name: </label>&nbsp;&nbsp;
          <input type="text" name='name' placeholder='Enter Your Name'/>
          </div>
          <div className='signupform'><label htmlFor="Email">Enter Your Email:</label>&nbsp;&nbsp;
          <input type="email" name='Email' placeholder='Email Address' /></div>
          <div className='signupform'><label htmlFor="Password">Enter Your Password: </label>&nbsp;&nbsp;
          <input type="password" name="Password" placeholder='Password'/></div>
          
        </div>
        <button>Continue</button>
        <p className="login-signup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing. I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
