import React from 'react';
import '../styles/Footer.css';
import Whatsapp from '../assets/whatsapp-svgrepo-com.svg'
import Facebook from '../assets/facebook-svgrepo-com.svg'
import Instagram from '../assets/instagram-svgrepo-com.svg'
import Twitter from '../assets/twitter-x.svg'
import Logo from '../assets/Recurso 1.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-section'>
                <div className='politics'>
                    <nav>
                        <ul className='nav-list'>
                            <img src={Logo} alt='Logo' className='logo'/>
                            <li><a href='privacy'>Politica de privacidad</a></li>
                            <li><a href='conditions'>Terminos y condiciones</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='footer-section'>
                <nav>
                    <ul className='nav-list'>
                        <li><a href='Location'>Encuentranos</a></li>
                        <li><a href='Cities'>Ciudades</a></li>
                        <li><a href='expation'>Plan de expanción</a></li>
                    </ul>
                </nav>
            </div>
            <div className='footer-section'>
                <nav>
                    <ul className = 'nav-list'>
                        <img src = {Whatsapp} alt='Whatsapp' className='svg'/> 
                        <img src = {Facebook} alt='Facebook' className='svg'/>
                        <img src = {Instagram} alt='Instagram' className='svg'/>
                        <img src = {Twitter} alt='Twitter' className='svg'/>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

