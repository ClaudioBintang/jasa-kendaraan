import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'
import Login from './pages/Login'
<<<<<<< HEAD
import Profilpage from './pages/Profilpage'
import Register from './pages/Register'
=======
>>>>>>> faca21e1b66ce2157e2b1160aa1ee4408bcd7aa2
import './index.css'
import ProtectedPages from './routes/protectedpages'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Detail" element={
        <ProtectedPages> 
          <Detailpage />
        </ProtectedPages>
        } />

<<<<<<< HEAD
      <Route path='/Profil' element={
        <ProtectedPages>
          <Profilpage />
        </ProtectedPages>
          } />

      <Route path='/Login' element={<Login />} />

      <Route path='/Register' element={<Register />} />
=======
      <Route path="/login" element={<Login />} />
      
>>>>>>> faca21e1b66ce2157e2b1160aa1ee4408bcd7aa2
    </Routes>
    </BrowserRouter>
  )
}

export default App
