import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar.jsx"
import Maincomponent from "./components/maincomponent.jsx"

function App() {

  return (
    <>
      <Navbar/>
      <Maincomponent/>
    </>
  )
}

export default App
