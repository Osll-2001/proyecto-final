import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
    userName: '',
    pass: ''
  })

  const [userCreate, setUserCreate] = useState(false)

  const handleData = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value })
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://api-music.up.railway.app/users', {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        userName: data.userName,
        pass: data.pass
      })
      setUserCreate(true)
    } catch (err) {

    }
  }

  return (
    <>
      {userCreate
        ? <div className='divUserCreate'>
          <h1>Usuario Creado :)</h1>
          <Link to='/login' className='opcionIngresoCuenta'>Ir A Login</Link>
        </div>
        : <>
          <form className='formSignUp'>
            <h1 className='titleForm'>Sign Up</h1>
            <div className='sectionForm'>
              <label htmlFor='name'>Name</label>
              <input className='inputForm' type='text' id='name' name='name' value={data.name} onChange={handleData} placeholder='Your name' />
            </div>
            <div className='sectionForm'>
              <label htmlFor='lastName'>LastName</label>
              <input className='inputForm' type='text' id='lastName' name='lastName' value={data.lastName} onChange={handleData} placeholder='Your LastName' />
            </div>
            <div className='sectionForm'>
              <label htmlFor='Email'>Email</label>
              <input className='inputForm' type='text' id='email' name='email' value={data.email} onChange={handleData} placeholder='Example@example.com' />
            </div>
            <div className='sectionForm'>
              <label htmlFor='userName'>Username</label>
              <input className='inputForm' type='text' id='userName' name='userName' value={data.userName} onChange={handleData} placeholder='ejem: osll2001' />
            </div>
            <div className='sectionForm'>
              <label htmlFor='Pass'>Password</label>
              <input className='inputForm' type='password' id='pass' name='pass' value={data.pass} onChange={handleData} placeholder='************' />
            </div>
            <div className='sectionForm'>
              <button className='btnSign' onClick={onSubmit}>Register</button>
            </div>
            <div className='sectionForm sectionQuestion'>
              <span className='questionAccount'>Already have an account?</span><Link className='loginLink' to='/login'>Sign in</Link>
            </div>
          </form>
          </>}

    </>
  )
}

export default SignUp
