import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h2>  Web Application Development</h2>
          </div>
          <ul className='service__list'>


            <li>
              <BiCheck className='service__list-icon' />
              <p>Enterprise applications</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom web applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce applications</p>
            </li>

          </ul>
        </article>
        {/*=====end of ui/ux========*/}

        <article className='service'>
          <div className='service__head'>
            <h2> CMS Development</h2>
          </div>
          <ul className='service__list'>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom CMS development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Integrating third-party CMS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintaining and updating CMS</p>
            </li>

          </ul>
        </article>
        {/*=====end of Web Development<========*/}

        <article className='service'>
          <div className='service__head'>
            <h2>End-to-End Development</h2>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and Planning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development and Implementation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deployment and Maintenance</p>
            </li>
          </ul>
        </article>
        {/*=====end of Content Creation========*/}
      </div>
    </section >
  )
}

export default services