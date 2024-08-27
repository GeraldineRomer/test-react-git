import React from 'react';
import ProfilePicture from '../assets/profile_picturejpg.jpg' 
import Logo from '../assets/Recurso 1.png'
import '../styles/Header.css';

export default function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt="logo" className='logo'/>
      <nav>
        <ul className='nav-list'>
          <li><a href='#menu'>Menu</a></li>
          <li><a href='#us'>Nosotros</a></li>
          <li><a href='#service'>Servicios</a></li>
        </ul>
      </nav>
      <img src={ProfilePicture} alt="profilePicture" className='profile_picture'/>
      

      
      </header>
  )
}
