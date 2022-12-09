import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './project.scss'
import data from '../data/portfolio'

const Project = () => {

  // const { id } = useParams()
  const [projects] = useState(data);

  console.log(projects);

  return (
    <section className='sectionPD'>
      <div>
        {projects.map((project) => {
          const {
            id,
            project_images,
            title,
            technologies,
            development_time,
            client,
            price,
            date,
            highlight_features,
            download
          } = project;

          return (
            <section className='sectionPD' key={id} >
              <div className='imgPD'>
                <img src={project_images} alt={title} />
              </div>
              <div className='dataPD'>
                <p><span className='projectData'>Title:</span>  {title}</p>
                <p><span className='projectData'>Technologies:</span>  {technologies}</p>
                <p><span className='projectData'>Development Time:</span>  {development_time}</p>
                <br />
                <p><span className='projectData'>Client:</span>  {client}</p>
                <p><span className='projectData'>Price:</span>  {price}</p>
                <p><span className='projectData'>Date:</span>  {date}</p>
                <br />
                <p><span className='projectData'>Highlight Features:</span>  {highlight_features}</p>
                <p><span className='projectData'>Download:</span>  {download}</p>
                <br />
                <Link to="/portfolio" >
                  <button >Back to Portfolio</button>
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  )
}

export default Project