import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-99382 container-fluid mt-5 border-top" >
      
    <div className="container">
      <div className="row">
        <div className="col-md-4 pr-md-5">
          <h2 className="footer-site-logo d-block mt-4 header">Muhammad Rehman</h2>
          <p className='text-white'>I am a Fronted Developer working in Maxify Company Pvt Ltd. I am interested in coding, finding errors, developing and customizing Websites, and learn more about coding.</p>
        </div>
        <div className="col-md mt-2">
          <h3 className='header'>Discover</h3>
          <ul className="list-unstyled nav-links text-muted">
            <li><a className='footer-item mt-2' href="#">Home</a></li>
            <li><a className='footer-item mt-2' href="#">About Us</a></li>
            <li><a className='footer-item mt-2' href="#">Portfolio</a></li>
            <li><a className='footer-item mt-2' href="#">Services</a></li>
            <li><a className='footer-item mt-2' href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-md mt-2">
          <h3 className='header'>About</h3>
          <ul className="list-unstyled nav-links">
            <li><a className='footer-item' href="#">Clients</a></li>
            <li><a className='footer-item' href="#">Team</a></li>
            <li><a className='footer-item' href="#">Career</a></li>
            <li><a className='footer-item' href="#">Testimonials</a></li>
            <li><a className='footer-item' href="#">Journal</a></li>
          </ul>
        </div>
        <div className="col-md mt-2">
          <h3 className='header'>Help</h3>
          <ul className="list-unstyled nav-links">
            <li><a className='footer-item' href="#">Privacy Policy</a></li>
            <li><a className='footer-item' href="#">Terms &amp; Conditions</a></li>
            <li><a className='footer-item' href="#">Partners</a></li>
          </ul>
        </div>
       
      </div> 

      <div className="row ">
        <div className="col-12 text-center">
          <div className="copyright mt-5 pt-5">
            <p><small>2024 All Rights Reserved.</small></p>
          </div>
        </div>
      </div> 
    </div>
    
  </footer>
  )
}

export default Footer
