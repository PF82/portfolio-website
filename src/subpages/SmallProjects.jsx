import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../sass/smallprojects.scss'
import projectsData from '../data/portfolio-small-projects'

const SmallProjects = () => {

  const [projects] = useState(projectsData);

  return (
    <section className='sectionSP'>
      <div className='containerSP'>
        {projects.map((project) => {
          return <div key={project.id} className='image_title_detailsSP'>
            <Link to={`/smallproject/${project.id}`} >
              <div className='imageSP'>
                <img src={project.image} alt={project.title} />
              </div>
              <div className='title_detailsSP'>
                <div className='h4SP_h5SP'>
                  <h4 className='h4SP'>{project.title}</h4>
                  <h5 className='h5SP'>{project.languages_frameworks_libraries}</h5>
                </div>
              </div>
            </Link>
          </div>
        }
        )}
      </div>
    </section >
  )
}

export default SmallProjects

