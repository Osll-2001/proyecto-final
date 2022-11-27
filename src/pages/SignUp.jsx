import React from 'react'

const SignUp = () => {
  return (
    <>
      <form className='formSignUp'>
        <h1 className='titleForm'>Sign Up</h1>
        <div className='sectionForm'>
          <label htmlFor='name'>Name</label>
          <input className='inputForm' type='text' id='name' placeholder='Your name' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='lastName'>LastName</label>
          <input className='inputForm' type='text' id='lastName' placeholder='Your LastName' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='Email'>Email</label>
          <input className='inputForm' type='text' id='Email' placeholder='Example@example.com' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='userName'>Username</label>
          <input className='inputForm' type='text' id='userName' placeholder='ejem: osll2001' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='Pass'>Password</label>
          <input className='inputForm' type='password' id='Pass' placeholder='************' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='confirmPass'>Confirm Password</label>
          <input className='inputForm' type='password' id='confirmPass' placeholder='************' />
        </div>
        <div className='sectionForm'>
          <button className='btnSignIn'>Register</button>
        </div>
      </form>
    </>
  )
}

export default SignUp
