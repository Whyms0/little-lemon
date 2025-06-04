import React from 'react';
import logo from '../assets/Logo.svg';
import './stylesheets/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header-nav">
      <div className="logo-container">
        <img src={logo} alt="Logo of the Little Lemon restaurant" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Reservations">Reservations</Link></li>
        <li><Link to="/Order Online">Order online</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header;