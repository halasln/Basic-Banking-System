import React from 'react';
import './Contacts.scss';
import pic from './../../assets/image1.jpg';
import linkedin from './../../assets/linkedin.svg'
import github from './../../assets/github.svg'
import { FaLaptopCode, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import html from './../../assets/html5.svg'
import css from './../../assets/css3.svg'
import sass from './../../assets/sass.svg'
import php from './../../assets/php.svg'
import js from './../../assets/js.svg'
import react from './../../assets/react.svg'
import mysql from './../../assets/mysql.svg'

function Contacts() {

  return (
    <div id='contacts' >

      <div className='card-content'>

        <img src={pic} alt="" />

        <div className='card-details'>

          <h1 className='title'>Software Engineering Student<FaLaptopCode /> </h1>

          <h1 className='name'>Hala Slimen </h1>

          <p>Tools :</p>

          <div className="outils">
            <ul>
              <li><img src={html} alt="Html5" /></li>
              <li><img src={css} alt="CSS3" /></li>
              <li><img src={sass} alt="Sass" /></li>
              <li><img src={js} alt="JavaScript" /></li>
              <li><img src={react} alt="ReactJs" /></li>
              <li><img src={php} alt="php" /></li>
              <li><img src={mysql} alt="MySql" /></li>
            </ul>


          </div>
          <p>Contact :</p>
          <div className="contact-desc">
            <p className='email'><MdOutlineMail />  halasliimen@gmail.com </p>
            <p className='phone'> <FaPhoneAlt />  +216 27 122 046</p>
          </div>

          <div className="social-media">


            <ul>
              <li><a href="https://www.linkedin.com/in/hala-sln/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a></li>

              <li><a href="https://github.com/halasln" target="_blank"><img src={github} alt="github" /></a></li>

            </ul>

          </div>



        </div>

      </div>

    </div >

  )
}

export default Contacts;


