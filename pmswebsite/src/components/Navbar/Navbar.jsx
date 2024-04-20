import React, { useEffect } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
// import logo from '../../assets/nnmlogo.png'
import Hamburger from './Hamburger'



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav style={{ position: "fixed",zIndex:'20' , paddingLeft:'5%', paddingRight:"5%" }} className='navbar'>
        <div className="container-fluid">
          <div className="logo">
            <img src='/nnmlogo.png'/> 
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul id='main-links'>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/fund-details">Fund Details</NavLink>
              </li>
              {/* <li>
                <a style={{color:"rgb(188,188,188"}}>About</a> <IoIosArrowDown style={{ color: "grey", cursor: "pointer" }} />
                <ul className='dropdown-menu'>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/about/management">KMP Team</NavLink>
                  <NavLink to="/about/milestones">Milestones</NavLink>
                  <NavLink to="/about/gallery">Gallery</NavLink>
                </ul>
              </li> */}
              
              <li><NavLink to="/sme">What Is SME ?</NavLink></li>
 
              <li>
              <NavLink to="/contact">Case Studies</NavLink>
              </li>
              <li id='login-nav-btn'>
              <NavLink to="/login" style={{boxShadow:'none'}}>Contact Us</NavLink>
              </li>
              {/* <li className='nav-list-icons'>
                <FaLinkedin className='n-icons'/>
                <FaXTwitter className='n-icons'/>
                <FaFacebook className='n-icons'/>
              </li> */}
               

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar