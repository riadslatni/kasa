import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Logo from '/public/logo.png'
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header className='header'>
      <NavLink to="/">
        <div>
              <img className='logo' src={Logo} alt='logo kasa' />
        </div>
      </NavLink>
      <Navbar />
      
    </header>
  )
}

export default Header