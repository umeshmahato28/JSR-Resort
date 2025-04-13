import React from 'react'
import './Footer.css'
import logo from '../../Image/logo.jpg'
// import {NavLink} from "react-router-dom";
// import FontAwesomeIcon from 'react'


const Footer = () => {
  return (
          
    <div className='container-fluid' id='Footer'>      
      <img
          src={logo}
          alt="Logo!"
          class="footerlogo"
        />
    <div class="page-footer text-center bg-dark">
       <i className="fab fa-instagram"></i> 
          <i className="fab fa-github"></i>
          <h5>© 2025 Copyright: JSR Resort</h5>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-facebook-f"></i>
         
    </div>
    </div>
  )
}

export default Footer

