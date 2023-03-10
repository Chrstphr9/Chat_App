import React from 'react'
import Add from "../images/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:'none'}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add An Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You Do Have An Account</p>
        </div>
    </div>
  )
}

export default Register