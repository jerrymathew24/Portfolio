import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'e-commerce website :  suprastore - user',
    github: 'https://github.com/jerrymathew24/ecommerce-supra-store',
    demo: 'https://supra-store-jqy4.onrender.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'e-commerce website :  suprastore - admin',
    github: 'https://github.com/jerrymathew24/ecommerce-supra-store',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'video-sharing website :   watchversee',
    github: 'https://github.com/jerrymathew24/Watchverse',
    demo: 'https://watchversee.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'e-commerce website : supra-watches',
    github: 'https://github.com/jerrymathew24/supra-watches-',
    demo: 'https://supra-watches.cyclic.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'NETFLIX CLONE',
    github: 'https://github.com/jerrymathew24/netflix-clone-React-',
    demo: 'https://netflix-03.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'PORTFOLIO',
    github: 'https://github.com/jerrymathew24/Portfolio',
    demo: ''
  },

]



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Website</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio