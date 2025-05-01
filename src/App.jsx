import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App