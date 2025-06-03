import React from 'react'
import './stylesheets/Hero.css'
import '../App.css'
import heroImg from '../assets/hero.jpg'
const Hero = () => {
  return (
    <article className='hero-article'>
      <div className='container'>
        <div className='heroText'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button role='button' className='cta'>Reserve a table</button>
        </div>

        <div className='imgContainer'>
          <img id='heroImg' src={heroImg} alt='An image represeting the seating area of the Little Lemon restaurant' />
        </div>
      </div>
    </article>
  )
}

export default Hero