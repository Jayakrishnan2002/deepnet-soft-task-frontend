import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/original Logo main.png'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleAddClick = () => {
    navigate('/admin/menu');
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
                <div onClick={() => navigate('/')} className={`c1 ${location.pathname === '/' ? 'active' : ''}`}>HOME</div>
                <div onClick={() => navigate('/menu')} className={`c1 ${location.pathname === '/menu' ? 'active' : ''}`}>MENU</div>
                <div onClick={() => navigate('/reservation')} className={`c3 ${location.pathname === '/reservation' ? 'active' : ''}`}>MAKE A RESERVATION</div>
                <div onClick={() => navigate('/contact')} className={`c4 ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT US</div>
                <div className="add-button" onClick={handleAddClick}>ADD</div>
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
          <a href="#home" className={location.pathname === '/' ? 'active' : ''}>HOME</a>
          <a href="#menu" className={location.pathname === '/menu' ? 'active' : ''}>MENU</a>
          <a href="#reservation" className={location.pathname === '/reservation' ? 'active' : ''}>MAKE A RESERVATION</a>
          <a href="#contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT US</a>
          <a href="/admin/menu" className={location.pathname === '/admin/menu' ? 'active' : ''}>ADD</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
