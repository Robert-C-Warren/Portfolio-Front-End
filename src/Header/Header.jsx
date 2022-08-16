import React, { useNavigate } from 'react'
import './Header.css'

const Header = () => {

    // let navigation = useNavigate();

    // const navigateToEmail = () => {
    //     navigation('/email')
    // }
    // const navigateToHome = () => {
    //     navigation('/')
    // }
    // const navigateToAbout = () => {
    //     navigation('/about')
    // }

  return (
    <div>
        <div className='header'>
            <a className='home-link'>home</a>
            <a className='about-link'>about</a>
            <a className='contact-link'>contact</a>
        </div>
    </div>
  )
}

export default Header