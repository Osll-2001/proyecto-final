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
          <input className='inputForm' type='text' id='User' placeholder='ExampleUser' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='Pass'>Password</label>
          <input className='inputForm' type='password' id='Pass' placeholder='************' />
        </div>
        <div className='sectionForm'>
          <button className='btnSignIn'>Sign In</button>
        </div>
      </form>
      <Link className='signUp' to='/signup'>Sign up</Link>
    </>
  )
}

export default Login
