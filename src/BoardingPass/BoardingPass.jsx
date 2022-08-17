import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './BoardingPass.css'
import Gui from './Assets/Gui.png'
import Business from './Assets/Business.png'
import Economy from './Assets/Economy.png'

const BoardingPass = () => {
  return (
    <div className='boardingpass-div'>
        <div>
            <h1 className='title'>Boarding Pass</h1>
        </div>

        <AliceCarousel autoPlay autoPlayInterval='3000'>
        <img src={Gui} className='sliderimg' />
        <img src={Business} className='sliderimg' />
        <img src={Economy} className='sliderimg' />
        </AliceCarousel>

        <div className='boardingpass-desc'>
            <p className='desc'>A boarding pass generator made using core Java and GUI made in JavaFX.
                                All details entered in the GUI are save in a List and written to an 
                                image file. The boarding pass image is chosen when a user selects Economy
                                or Business. The users phone number is formatted automatically and a flight
                                number is randomly generated.
            </p>
        </div>

        <div className='links-container'>
          <a href='https://github.com/Robert-C-Warren/Pyramid-Academy/tree/main/BoardingPassFX' target="_blank" rel='noreferrer'>
                  <button className="bi bi-github java">Java</button>
          </a>
        </div>
    </div>
  )
}

export default BoardingPass