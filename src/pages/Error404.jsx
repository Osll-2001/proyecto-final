import { useLocation } from 'react-router-dom'
import '../styles/Error404.css'

const Error404 = () => {
  const location = useLocation()

  return (
    <div className='Error404Container'>
      <h1>Error 404 :c</h1>
      <h1>La Ruta {location.pathname} No Existe</h1>
    </div>
  )
}

export default Error404
