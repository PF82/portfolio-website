import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.scss'
import data from '../data/portfolio'

const Portfolio = () => {

  const [projects] = useState(data);

  return (
    <section className='sectionP'>
      <h1 className='h1P'>PORTFOLIO</h1>
      <div className='divP'></div>

      <div className='containerP'>
        {projects.map((project) => {
          const { id, image, title } = project;

          return (
            <div key={id} className='image_title_detailsP'>
              <div className='imageP'>
                <img src={image} alt={title} />
              </div>
              <div className='title_detailsP'>
                <h3 className='h3P'>{title}</h3>
                <Link to={`/projectDetails/${id}`} >
                <button className='buttonP' >Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio

