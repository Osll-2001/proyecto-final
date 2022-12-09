import '../styles/Login-Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    pass: ''
  })

  const [invalidCred, setInvalidCred] = useState(false)
  const navigate = useNavigate()

  const handleData = ({ target: { value, name } }) => {
    setCredentials({ ...credentials, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await axios.get(`https://api-music.up.railway.app/users?email=${credentials.email}&pass=${credentials.pass}`)
      // si la data tiene array entonces significa que si encontro al usuario
      if (user.data.data.length) {
        // Lo redirige a esa ruta
        navigate('/homeadmin')
      } else {
        // Activa este State para que se muestra el Error de Datos Invalidos
        setInvalidCred(true)
        // Se agrego para que este letrero de Datos Invalidos dure 3 segundos en estar
        setTimeout(() => {
          setInvalidCred(false)
        }, 3000)
      }
    } catch (err) {
      throw Error('Error: ', err)
    }
  }

  return (
    <>
      <form className='formLogin'>
        <h1 className='titleForm'>Login</h1>
        <div className='sectionForm'>
          <label htmlFor='email'>User | Email</label>
          <input className='inputForm' type='text' id='email' name='email' value={credentials.email} onChange={handleData} placeholder='example@example.com' />
        </div>
        <div className='sectionForm'>
          <label htmlFor='pass'>Password</label>
          <input className='inputForm' type='password' id='pass' name='pass' value={credentials.pass} onChange={handleData} placeholder='' />
        </div>
        {invalidCred ? <div className='sectionForm invalidCred'>Datos Incorrectos</div> : <></>}
        <div className='sectionForm'>
          <button className='btnSign' onClick={onSubmit}>Sign In</button>
        </div>
        <div className='sectionForm sectionQuestion'>
          <span className='questionAccount'>Don't have an account? </span><Link className='loginLink' to='/signup'> Sign up</Link>
        </div>
      </form>
    </>
  )
}

export default Login
