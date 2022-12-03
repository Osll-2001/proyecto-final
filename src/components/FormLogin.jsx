import React from 'react'
import '../styles/Login-Register.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <form className='formLogin'>
        <h1 className='titleForm'>Login</h1>
        <div className='sectionForm'>
          <label htmlFor='User'>User | Email</label>
          <input className='inputForm' type='text' id='User' placeholder='example@example.com' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='Pass'>Password</label>
          <input className='inputForm' type='password' id='Pass' placeholder='' />
        </div>
        <div className='sectionForm'>
          <button className='btnSign'>Sign In</button>
        </div>
        <div className='sectionForm sectionQuestion'>
          <span className='questionAccount'>Don't have an account? </span><Link className='loginLink' to='/signup'> Sign up</Link>
        </div>
      </form>
    </>
  )
}

export default Login
