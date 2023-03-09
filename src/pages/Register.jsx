import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="logo">Register</span>
            <form>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" />
                <button>Sign Up</button>
            </form>
            <p>You Do Have An Account</p>
        </div>
    </div>
  )
}

export default Register