import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Initials from '../Assets/Untitled-1.svg'

const Header = () => {

  return (
    <div className='header-main'>
        
        <img className='initials' src={Initials} width={70} height={70} alt='Initials' />

        <div className='header'>
            <Link to='/' className='home-link' style={{ textDecoration: 'none' }} >home</Link>
            <Link to='/about' className='about-link' style={{ textDecoration: 'none' }} >about</Link>
            <Link to='/email' className='contact-link' style={{ textDecoration: 'none' }} >contact</Link>
        </div>
    </div>
  )
}

export default Header