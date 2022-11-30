import React, { useState } from 'react'
import "../pages/portfolio.css"
import data from '../data/portfolio'


const Portfolio = () => {

  const [projects] = useState(data);

  const work = [];

  for (let i = 0; i < projects.length; i++) {
    work.push(projects[i]);
  }

  const { id, name, client, image, web_technology, date } = projects;

  console.log(projects)
  console.log(work);

  return (
    <section className='portfolio'>
      <h1 className='h1-portfolio'>PORTFOLIO</h1>
      <div className='underline'></div>
      <article key={id} className='project'>
        <h3>{client}</h3>
        <img src={image} alt={name} />
        <div>
          <h4>{web_technology}</h4>
          <p>{date} years</p>
        </div>
      </article>
    </section>
  )
}

export default Portfolio