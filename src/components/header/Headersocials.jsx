import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'> <BsLinkedin/> </a>
        <a href="https://github.com" target='_blank'> <BsGithub/> </a>
        <a href="https://whatsapp.com" target= '_blank'> <IoLogoWhatsapp/> </a>
    </div>
  )
}

export default Headersocials