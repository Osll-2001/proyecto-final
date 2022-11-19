import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <>
      <form className='formLogin'>
        <h1 className='titleForm'>Login</h1>
        <div className="sectionForm">
        <label htmlFor="User">User | Email</label>
        <input type="text" id="User" placeholder='ExampleUser'/>
        </div>
        <div className="sectionForm">
        <label htmlFor="Pass">Password</label>
        <input type="password" id="Pass" placeholder='************'/>
        </div>
        <div className='sectiomForm'>
        <button className='btnSignIn'>Sign In</button>
        </div>
      </form>
      <a className='signUp'>Sign up</a>
    </>
  )
}

export default Login