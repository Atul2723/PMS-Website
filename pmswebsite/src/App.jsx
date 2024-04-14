import React from 'react'
import Navbar from './components/Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Homepage/Home'

const App = () => {
  return (
    <>
     <Router>
        <div>
          <Navbar />
          <Home/> 
         
        </div>
      </Router>
    </>
  )
}

export default App