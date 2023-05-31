import { useState, useEffect } from 'react'
import './App.css'
import UnityComponent from './Components/UnityComponent.jsx'
import TerniumHeader from './Components/TerniumHeader'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Juego from './Components/Juego.jsx';
import Perfil from './Components/Perfil.jsx';
import Perfiles from './Components/Perfiles.jsx';
import Puntuaciones from './Components/Puntuaciones.jsx';
import Administracion from './Components/Administracion';
import Login from './Components/Login';

function App() {
  const [isloggedin, setIsloggedin] = useState(false)
  function loggedin() {
    setIsloggedin(!isloggedin);
  }
  if (isloggedin === false) {
    return (<Login onLogIn={loggedin}/>)
  }
  // en realidad esto tiene que pasar cuando haga submit al form
  // useEffect(() => {
  //   async function getLogin() {
  //   const [submitted, setSubmitted] = useState(false);
  //     //hacer un post request a la base de datos con el user y pass
  //     const response = await fetch();
  //     const jsonResponse = await response.json();
  //     // si nos regresa que no se encontro el password hacemos algo, lo volvemos a ejecutar creo.
  //     if (response == "404") {
  //       // creo que quitar esto porque no hace lo que pienso
  //       getLogin();
  //     }
  //     setLogin({user: response.user, pwd: response.pwd});
  //   }
  //   getLogin();
  // }, [])

  return (
    <>
      <TerniumHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Juego" element={<Juego />} />
        <Route path="/Perfil" element={<Perfil/>} />
        <Route path="/Perfiles" element={<Perfiles/>} />
        <Route path="/Puntuaciones" element={<Puntuaciones />}/>
        <Route path="/Administracion" element={<Administracion />}></Route>
      </Routes>
    </>
  )
}

export default App
