// src/components/Header.js
// import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Hoặc sử dụng Styled Components
import logo from '../assets/logo.png'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navbar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        
        <Navbar></Navbar>
        </div>
    </header>
  );
};

export default Header;
