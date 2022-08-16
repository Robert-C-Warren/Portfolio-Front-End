import React from 'react'
import './Home.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {

    let navigate = useNavigate();

    const navigateToEmail = () => {
        navigate('/email')
    }

  return (
    <div className='home-div'>
        <div className='title'>
            <h1 className='name'>Robert Warren</h1>
        </div>

        <div className='languages'>
            <Link to='/about' className='languages-link' style={{ textDecoration: 'none' }}>Java | Spring Boot | React.js</Link>
        </div>

        <div className='social-icons'>
            <a href='https://github.com/Robert-C-Warren?tab=repositories' target="_blank" rel='noreferrer'>
                <button className="bi bi-github"></button>
            </a>

            <a href='https://www.linkedin.com/in/robert-warren-996822118/' target='_blank' rel='noreferrer'>
                <button className="bi bi-linkedin"></button>
            </a>
            
            <button className="bi bi-envelope-fill" onClick={navigateToEmail}></button>
        </div>

    </div>
  )
}

export default Home