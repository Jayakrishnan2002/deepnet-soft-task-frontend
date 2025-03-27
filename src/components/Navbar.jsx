import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/original Logo main.png'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className='navbar_container'>
          <div className='navbar_logo'>
            <div className="logo_container">
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='logo_name'>
                <div className='ln1'>
                     DEEP <span>NET</span>
                </div>
                <div className='ln2'>
                    SOFT
                </div>
            </div>
          </div>
          <div className='navbar_content'>
              <div className='content_div'>
                <div className="c1">HOME</div>
                <div className="c2">MENU</div>
                <div className="c3">MAKE A RESERVATION</div>
                <div className="c4">CONTACT US</div>
              </div>
          </div>
          <div className="hamburger" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="close-btn" onClick={toggleSidebar}>&times;</div>
          <a href="#home">HOME</a>
          <a href="#menu">MENU</a>
          <a href="#reservation">MAKE A RESERVATION</a>
          <a href="#contact">CONTACT US</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
