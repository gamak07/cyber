import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import QuizPage from './Pages/QuizPage/QuizPage'
import SimulationPage from './Pages/SimulationPage/SimulationPage'
import BestPracticesPage from './Pages/BestPracticesPage/BestPracticesPage'
import Footer from './Components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/best-practices' element={<BestPracticesPage />} />
        <Route path='/simulation' element={<SimulationPage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
