import React from 'react'
import './Register.css'
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="auth">
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder='username' />
            <input required type="password" placeholder='password'/>
            <input required type="email" placeholder='email-id' />
            <button>Register</button>
            <p>This is an error</p>
            <span>Already have an account? <Link to="/Login">Login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register