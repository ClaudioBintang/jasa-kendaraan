import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'
import Login from './pages/Login'
import Profilpage from './pages/Profilpage'
import Register from './pages/Register'
import './index.css'
import ProtectedPages from './routes/protectedpages'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Detail" element={
        // <ProtectedPages> 
          <Detailpage />
        // </ProtectedPages>
        } />
      <Route path="/Profil" element={
        <ProtectedPages>
        <Profilpage /> 
      </ProtectedPages>
        } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
