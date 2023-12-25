import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import Header from '../Components/Header'
import Historico from '../Page/Historico'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
