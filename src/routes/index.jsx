import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

const RouteIndex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      {/* Redireccionar el path / para que vaya siempre a /home */}
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RouteIndex
