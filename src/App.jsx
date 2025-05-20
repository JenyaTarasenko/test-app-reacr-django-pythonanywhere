import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// const reactLogo = 'react.svg';
// const viteLogo = 'vite.svg';
// const reactLogoPath = `/static/${reactLogo}`
// const viteLogoPath = `/static/${viteLogo}`
import NavBar from './components/NavBar/NavBar'
import Home from './components/ListView/ListView'

function App() {


  return (
    <>
    <NavBar />
    <Home />
    </>
  )
}

export default App
