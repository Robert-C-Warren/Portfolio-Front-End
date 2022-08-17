import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-container'>
        <Link to='/bugtracker' className='bugtracker-link' style={{ textDecoration: 'none' }} >Bug Tracker</Link>
        <Link to='/boardingpass' className='boardingpass-link' style={{ textDecoration: 'none' }} >Boarding Pass</Link>
    </div>
  )
}

export default Projects