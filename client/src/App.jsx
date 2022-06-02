import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
//pages
import { MainPage } from './pages/mainPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
     <Route path='/' element={<MainPage/>}></Route>
   </Routes>
  )
}

export default App
