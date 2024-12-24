import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'
import Login from './pages/Login'
import './index.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      
      <Route path="/Vehicle" element={<Detailpage />} />

      <Route path="/login" element={<Login />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
