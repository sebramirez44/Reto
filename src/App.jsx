import { useState } from 'react'
import './App.css'
import UnityComponent from './Components/UnityComponent.jsx'
import TerniumHeader from './Components/TerniumHeader'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Juego from './Components/Juego.jsx';
import Perfil from './Components/Perfil.jsx';
import Perfiles from './Components/Perfiles.jsx';
import Puntuaciones from './Components/Puntuaciones.jsx';
import Burger from './Components/Burger';
import Menu from './Components/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TerniumHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Juego" element={<Juego />} />
        <Route path="/Perfil" element={<Perfil/>} />
        <Route path="/Perfiles" element={<Perfiles/>} />
        <Route path="/Puntuaciones" element={<Puntuaciones />}/>
      </Routes>
      {/* <UnityComponent /> */}
    </>
  )
}

export default App
