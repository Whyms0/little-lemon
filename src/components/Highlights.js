import React from 'react'
import greekSalad from '../assets/greeksalad.jpg'
import brushetta from '../assets/brushetta.jpg'
import lemonDessert from '../assets/lemon dessert.jpg'
import './stylesheets/Highlights.css'
const Highlights = () => {
  return (
    <article className='highlights-article'>
      <div className='container'>
        <div className='specials-head'>
          <h2>Specials</h2>
          <button className='cta' role='button'>Online Menu</button>
        </div>


        <div className='dish-container'>
  <div className='dish'>
    <img src={greekSalad} alt='Greek Salad' />
    <div className='dish-header'>
      <h3>Greek Salad</h3>
      <h3><span>$12.99</span></h3>
    </div>
    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
    <a className='cta' href='#'>Order Delivery</a>
  </div>

  <div className='dish'>
    <img src={brushetta} alt='Brushetta' />
    <div className='dish-header'>
      <h3>Bruschetta</h3>
      <h3><span>$18.99</span></h3>
    </div>
    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
    <a className='cta' href='#'>Order Delivery</a>
  </div>

  <div className='dish'>
    <img src={lemonDessert} alt='Lemon Dessert' />
    <div className='dish-header'>
      <h3>Lemon Dessert</h3>
      <h3><span>$4.99</span></h3>
    </div>
    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
    <a className='cta' href='#'>Order Delivery</a>
  </div>
</div>




      </div>
    </article>
  )
}

export default Highlights