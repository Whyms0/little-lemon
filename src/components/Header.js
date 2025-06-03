import React from 'react'
import logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <>
    <nav>
    <img src={logo} alt='Logo of the Little Lemon restaurant' />
    <li><a href={'/Home'}>Home</a></li>
    <li><a href="/About">About</a></li>
    <li><a href="/Menu">Menu</a></li>
    <li><a href='Reservations'>Reservations</a></li>
    <li><a href='/Order Online'>Order online</a></li>
    <li><a href='/Login'>Login</a></li>
    </nav>
    </>
  )
}

export default Header