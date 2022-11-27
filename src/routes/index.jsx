import { Routes, Route } from 'react-router-dom'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const RouteIndex = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default RouteIndex
