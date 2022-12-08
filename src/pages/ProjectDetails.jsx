import React, { useState } from 'react'
import data from '../data/portfolio'

const ProjectDetails = () => {

  const [projects] = useState(data);

console.log(projects);

  return (
    <section>
      hello
      <div>
        {projects.map((project) => {
          const { id, project_images, title, client, web_technology, date } = project;
console.log(client);
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

export default ProjectDetails