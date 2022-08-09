import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const footer = () => {
  return (
  <footer>
       <a href="#" className='footer__logo'>YOU CAN CODE</a>

       <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>

       <div className='footer__socials'>
        <a href="https://twitter"><AiOutlineTwitter/></a>
        <a href="https://instagram"><BsInstagram/></a>
        <a href="https://telegram"><FaTelegramPlane/></a>
       </div>

       <div className="footer__copyright">
        <small>&copy; Youcancode. All rights reserved.</small>
       </div>
  </footer>
  )
}

export default footer