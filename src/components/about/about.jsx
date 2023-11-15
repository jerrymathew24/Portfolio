import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { BsFillHandbagFill } from 'react-icons/bs'
import { RiCustomerServiceFill } from 'react-icons/ri'

const about = () => {
  return (
    <section id='about'>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0-1 year</small>
            </article>


            <article className='about__card'>
              <BsFillHandbagFill className='about__icon' />
              <h5>Completed</h5>
              <small>7+ Projects</small>
            </article>
            <article className='about__card'>
              <RiCustomerServiceFill className='about__icon' />
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>

          </div>
          <p>
            Professional UX/UI design and implementation of websites, web portals and other solutions.
          </p>
          {/* 
          <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default about