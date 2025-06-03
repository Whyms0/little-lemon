import React from 'react'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-grid">
    <div className="footer-logo">
      <img src={logo} alt="Logo" />
    </div>
    <div>
      <h2>Navigation</h2>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Reservations">Reservations</a></li>
        <li><a href="/Order Online">Order Online</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
    </div>
    <div>
      <h2>Contact</h2>
      <ul>
        <li>123 Main St</li>
        <li>(123) 456-7890</li>
        <li>info@littlelemon.com</li>
      </ul>
    </div>
    <div>
      <h2>Follow Us</h2>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer