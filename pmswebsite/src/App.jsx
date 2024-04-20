import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Homepage/Home'
import FundDetails from './components/FundDetails/FundDetails'
import Footer from './components/Footer/Footer'
import Sme from './components/SME/Sme'

const App = () => {
  
  return (
    <>
     <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='fund-details' element={<FundDetails/>}/>
            <Route exact path='/sme' element={<Sme/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App