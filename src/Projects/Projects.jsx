import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import ParticlesBg from 'particles-bg'

const Projects = () => {
  return (
    <div className='projects-container'>
        <Link to='/bugtracker' className='bugtracker-link' style={{ textDecoration: 'none' }} >Bug Tracker</Link>
        <Link to='/boardingpass' className='boardingpass-link' style={{ textDecoration: 'none' }} >Boarding Pass</Link>
        <Link to='/portfolio' className='portfolio-link' style={{ textDecoration: 'none' }} >Portfolio</Link>
        <ParticlesBg color="#000000" type='cobweb' bg={true} />
    </div>
  )
}

export default Projects