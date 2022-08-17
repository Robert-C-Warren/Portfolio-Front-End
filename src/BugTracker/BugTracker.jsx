import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './BugTracker.css'
import AdminView from './BugTracker/AdminView.jpg'
import HomePage from './BugTracker/HomePage.jpg'
import Login from './BugTracker/Login.jpg'
import OrginizationSelection from './BugTracker/OrginizationSelection.jpg'
import Signup from './BugTracker/Signup.jpg'
import UserView from './BugTracker/UserView.jpg'

const handleDragStart = (e) => e.preventDefault();

const Projects = () => {
  return (
    <div className='bugtracker-div'>
        <div>
            <h1 className='title'>Bug Tracker</h1>
        </div>

        <AliceCarousel autoPlay autoPlayInterval='3000'>
        <img src={HomePage} className='sliderimg' />
        <img src={Login} className='sliderimg' />
        <img src={Signup} className='sliderimg' />
        <img src={OrginizationSelection} className='sliderimg' />
        <img src={AdminView} className='sliderimg' />
        <img src={UserView} className='sliderimg' />
        </AliceCarousel>

        <div className='bugtracker-desc'>
            <p className='desc'>A bug tracker application built using React.js, Spring Boot, and MySQL.
                users can sign up as an individual or an orginization. Once signed up,
                passwords are encrypted using bCrypt. All users are granted user permissions
                and can be changed to admin if another admin switches their role. Users are 
                able to add bug reports but an admin must review and publish them before they
                become visible.
            </p>
        </div>

        <div className='links-container'>
          <a href='https://github.com/Robert-C-Warren/bug-tracker-react' target="_blank" rel='noreferrer'>
                  <button className="bi bi-github frontend">Front End</button>
          </a>
          
          <a href='https://github.com/Robert-C-Warren/BugTracker' target="_blank" rel='noreferrer'>
                  <button className="bi bi-github backend">Back End</button>
          </a>
        </div>
    </div>
  )
}

export default Projects