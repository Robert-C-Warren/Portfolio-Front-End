import React, { useState, useEffect } from 'react'
import './About.css'

const About = () => {

// State for setting down arrow visibility and height of page during scroll
const [isVisible, setIsVisible] = useState(true);
const [height, setHeight] = useState(0);

// Effect to listen to page scrolling
useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
}, [])

// Scroll listener that sets the arrow to hidden when the height of the page hits 317
const listenToScroll = () => {
    let heightToHideFrom = 317;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
        isVisible && setIsVisible(false);
    } else {
        setIsVisible(true);
    }
};

  return (
    <div className='about-main'>

        <h1 className='animate__animated animate__backInDown title'>About Me</h1>

        {/* Down arrow that disappears at height of 317 */}
        {
            isVisible &&
            <div id="hide">
                <i className='bi bi-arrow-down bounce' />
            </div>
        }

        <h3 className='experience'>Experience</h3>

        <p className='about-para'>I am a Java Full Stack developer. I mainly use React.js, Java Spring Boot,
                                    and MySQL as my stack of choice. I have built several projects in Java,
                                    as well as a couple in React.js. I have collaborated with a team to build 
                                    a bug tracker application, which is available on my GitHub, as well as at  
                                    <a href='http://bugtracker.link' className='site-link'> bugtracker.link.</a> This project also contains
                                    security via JWT and bCrypt, email service on the backend when a bug is added
                                    by a user, and user and admin privileges.
        </p>

        <h3 className='personal'>Personal</h3>

        <p className='personal-para'>I diploma for Music Production from Icon Collective and have been producing
                                        music for over 10 years. I am an avid PC gamer and have built and upgraded 
                                        PC's for myself and clients over the last 5 years as a way of earning some 
                                        side income. I have been focusing my energies into learning how to code for
                                        the last 6 months and have dicovered a real love for it. I am excited everyday
                                        by the new things I can learn and would love to be a part of your team! 
        </p>

        <h5 className='music-link'>Here's some of my music!</h5>
        <a className='spotify-link' href='https://open.spotify.com/artist/7ecTUSo8sLzsEJfyZwZ34T' target="_blank" rel='noreferrer'>
            <button className='bi bi-spotify' />
        </a>
        
    </div>
  )
}

export default About