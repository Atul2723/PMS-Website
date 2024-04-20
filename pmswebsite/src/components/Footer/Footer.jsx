
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className='disclaimer'>
          <div className='disclaimer-details'>
          <h4>Disclaimer</h4>
          <p>This analysis has been done using publicly available data wherever possible. The information presented is only informative and does not promote any product or company. This Presentation may not be all inclusive and may not contain all of the information that you may consider material. Any liability in respect of the contents of, or any omission from, this Presentation is expressly excluded.</p>
          <p>The information contained herein is of a general nature and is not intended to address the circumstances of any particular individual or entity. Although we endeavor to provide accurate and timely information, there can be no guarantee that such information is accurate as of the date it is received or that it will continue to be accurate in the future. No one should act on such information without appropriate professional advice and only act on after a thorough examination of the particular situation.</p>
          </div>
          
        </div>
    <footer className="footer">
      
      <div className="footer-container">
        
        <div className="column">
          {/* <h4>Disclaimer</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies.</p> */}
          <img src='/nnmlogo.png'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, rerum!</p>
        </div>
        <div className="column">
          <h4>Navigation Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <div>
              <MdLocationOn className="icon" /> 123 Street, City, Country
            </div>
            <div>
              <FaPhone className="icon" /> +123456789
            </div>
            <div>
              <FaEnvelope className="icon" /> example@example.com
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
    
    </>
  );
};

export default Footer;
