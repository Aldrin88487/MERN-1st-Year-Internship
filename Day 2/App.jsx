import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Reg from './components/Reg'
import Tabledata from './components/Tabledata'
import CardData from './components/CardData'
import Navibar from './components/Navibar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Statebasics from './components/Statebasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>Adith S Gopal </h1>
     <Login/> */}
     {/* <Reg/> */}
     {/* <Tabledata/> */}
     {/* <CardData/> */}
     {/* <Navibar/> */}
     <BrowserRouter>
     <Navibar/>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/r" element={<Reg/>}/>
      <Route path="/t" element={<Tabledata/>}/>
      <Route path="/c" element={<CardData/>}/>
      <Route path="/s" element={<Statebasics/>}/>
     </Routes>
     </BrowserRouter>
     
      {/* <Statebasics/> */}
    </>
  )
}

export default App
