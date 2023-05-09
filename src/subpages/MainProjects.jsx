import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../sass/mainprojects.scss'
import projectsData from '../data/portfolio-main-projects'

const MainProjects = () => {

  const [projects] = useState(projectsData);

  return (
    <section className='sectionMP'>

      <div className='containerMP'>
        {projects.map((project) => {
          return <div key={project.id} className='image_title_detailsMP'>
            <Link to={`/mainproject/${project.id}`} >
              <div className='imageMP'>
                <img src={project.image} alt={project.title} />
              </div>
              <div className='title_detailsMP'>
                <div className='h4MP_h5MP'>
                  <h4 className='h4MP'>{project.title}</h4>
                  <h5 className='h5MP'>{project.languages_frameworks_libraries}</h5>
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

export default MainProjects

