import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './stylesheets/Confirmed.css'

const BookingConfirmation = () => {
  const navigate = useNavigate();
  return (
    <article className='bookingConfirmed'>
      <div className='container'>
      <FontAwesomeIcon
      className='checkk'
        icon={faCircleCheck}
        size="7x"
        color="#16a34a"

/>

      <h2>We Can’t Wait to See You</h2>
      <p>Your booking was successful. A confirmation email will be sent to you shortly.</p>
      <button
      className='cta'
        id='homebtn'
        onClick={() => navigate('/')}
      >
        Go to Homepage
      </button>
      </div>
    </article>
  );
};

export default BookingConfirmation;
