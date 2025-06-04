import React from 'react'
import './stylesheets/Testemonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faStar } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
const Testemonials = () => {
  return (
    <article className='testemonials-article'>
      <div className='test-header'>
        <h2>Testimonials</h2>
      </div>

      <div className='ratings-container'>


        <div className='ratingBox'>
          <div className='rating'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='user'>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>Yani Sahraoui</h3>
          </div>
          <p>Best experience i ever had</p>
        </div>

        <div className='ratingBox'>
          <div className='rating'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='user'>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>Julieth Bourgeois</h3>
          </div>
          <p>Good service, tasty food</p>
        </div>


        <div className='ratingBox'>
          <div className='rating'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='user'>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>Fahd Moummadi</h3>
          </div>
          <p>W restaurant!</p>
        </div>


        <div className='ratingBox'>
          <div className='rating'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='user'>
            <FontAwesomeIcon icon={faUserTie} />
            <h3>Yahya</h3>
          </div>
          <p>Love the food!</p>
        </div>



      </div>
    </article>
  )
}

export default Testemonials