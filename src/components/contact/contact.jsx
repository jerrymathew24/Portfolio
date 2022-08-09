import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p60g57f', 'service_p60g57f', form.current, 'eXvHltr_zE--WCEfZ')
     
  };
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    
    <div className="container contact__container">
      <div className="contact__options">
         <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <a href="mailto:jer2ymatheww@gmail.com" target= '_blank'>Send a message</a>
         </article>

         <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <a href="https://wa.me/7907456230" target= '_blank'>Send a message</a>
         </article>

         <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/jerry-mathew-14611412b" target= '_blank'>Send a message</a>
         </article>


      </div>
      {/*======end of contact options======*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact