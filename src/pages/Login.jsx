import React from 'react'
import Add from "../images/addAvatar.png"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='email' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
               
                <button>Sign In</button>
            </form>
            <p>You Don't Have An Account? Register</p>
        </div>
    </div>
  )
}

export default Login