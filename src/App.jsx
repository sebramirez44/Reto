import { useState } from 'react'
import './App.css'
import UnityComponent from './Components/UnityComponent.jsx'
import TerniumHeader from './Components/TerniumHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TerniumHeader />
      {/* <UnityComponent /> */}
    </>
  )
}

export default App
