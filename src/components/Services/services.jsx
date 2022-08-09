import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>  UI/UX Design</h3>
          </div>
          <ul className='service__list'>
           
           
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Minimalist and clean Website Design.</p>
            </li>
           
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modern UI to raise engagement and conversions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Delivery of UX and UI innovations for better user appeal and usability.</p>
            </li>

          </ul>
        </article>
{/*=====end of ui/ux========*/}

<article className='service'>
          <div className='service__head'>
            <h3> Front-end Development.</h3>
          </div>
          <ul className='service__list'>
         
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Improve visual appeal, functional fullness and usability of existing web apps.</p>
            </li>
          
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Close analysis of the user audience to understand their needs and reflect these findings in UI.</p>
            </li>
          
           
           

          </ul>
        </article>
{/*=====end of Web Development<========*/}

<article className='service'>
          <div className='service__head'>
            <h3>  Back-end Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Implements the business logic of your web app on the back end.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Risk assessment and quality control assurance services..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Node.js Development Services.</p>
            </li>
            

          </ul>
        </article>
{/*=====end of Content Creation========*/}

      </div>
    </section>
  )
}

export default services