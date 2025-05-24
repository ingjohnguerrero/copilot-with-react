import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
