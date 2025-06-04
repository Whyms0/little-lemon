import React from 'react'
import '../App.css'
import './stylesheets/About.css'
import manager from '../assets/chef3.jpg'
import manager2 from '../assets/chef.jpg'

const About = () => {
  return (
    <article className='about-article'>
      <div className='about-container'>

      <div className='about-text'>
        <div className='text-header'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      </div>


      <div className='about-imgs'>
      <img className='manager1' src={manager2} alt='Little lemon restaurant managers making food' />
      <img className='manager2' src={manager} alt='Little lemon restaurant managers making food' />
      </div>
      </div>
    </article>
  )
}

export default About