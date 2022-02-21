
import React from 'react';
import logo from './../../assets/dollar.svg';
import './Navbar.scss';
import { Link } from "react-router-dom";
function Navbar() {
  return (

    <div className='navbar'>

      <img src={logo} alt="" />

      <ul>

        <li><Link to="/home">Home</Link></li>

        <li><Link to="/viewcustomers">View Customer</Link></li>

        <li><Link to="/contact">Contact </Link></li>
      </ul>

    </div >

  )
}

export default Navbar; 