import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Detailpage from './pages/Detailpage'
 
import './index.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      
      <Route path="/Vehicle" element={<Detailpage />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
