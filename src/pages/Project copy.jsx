import React, { useState } from 'react'
// import styles from './project.module.css'
import data from '../data/portfolio'

const Project = () => {

  const [projects] = useState(data);

  return (
    <section>

      <div>
        {projects.map((project) => {
          const { id, project_images, title, client, web_technology, date } = project;

          return (
            <div key={id} >
              <div >
                <img src={project_images} alt={title} />
              </div>
              <div>
                <p>{title}</p>
                <p>{client}</p>
                <p>{web_technology}</p>
                <p>{date}</p>
                {/* <Link to={`/singleproject/${id}`} > */}
                <button >Back to Portfolio</button>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Project