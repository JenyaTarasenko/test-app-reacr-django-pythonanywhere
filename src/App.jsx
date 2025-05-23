import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// const reactLogo = 'react.svg';
// const viteLogo = 'vite.svg';
// const reactLogoPath = `/static/${reactLogo}`
// const viteLogoPath = `/static/${viteLogo}`
// import NavBar from './components/NavBar/NavBar'
// import Home from './components/ListView/ListView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProjectDetail from './components/DetailView/DetailView';
import DetailPage from './pages/DetailPage/DetailPage';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* сформировал страничку детальная информация каждого проекта из двух компонентов 
          NavBar и ProjectDetail на django он ссылается на url views  */}
          <Route path="/projects/:slug" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
