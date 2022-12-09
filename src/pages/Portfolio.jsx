import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.scss'
import projectsData from '../data/portfolio'

const Portfolio = () => {

  const [projects] = useState(projectsData);

  // quando o user clica em details, vais redireciona lo para a Project page (como esta agora)
  // mas desta vez passamos o 'id' do projecto como param
  // (tenho q ler docs do react-router-dom) -> https://reactrouter.com/en/main
  // quando o component Project e rendered, vai buscar o id do projecto ao url params (q vem da route..)
  // e ai o Project component vai buscar a data (a protfolio.js) do projecto especifico, usando esse tal ID

  // exemplo.. 
  // 1-user clica no botao details do 2o projecto..
  // 2-app e "redirectionada" para a route '/project', q vai fazer render do component Project
  // 3-quando a app for redirecionada tambem vai passar um parametro PROJECT_ID=2
  // 4-o component Project quando faz o render, vai buscar esse param ao url 
  // 5-e vai buscar a data correspondente so project ID, neste caso seria 'Weather Application' app

  return (
    <section className='sectionP'>
      <h1 className='h1P'>PORTFOLIO</h1>
      <div className='divP'></div>

      <div className='containerP'>
        {projects.map((project) => {
          // <Project title={project.title} technologies={project.technologies}/>
          return <div key={project.id} className='image_title_detailsP'>
            <div className='imageP'>
              <img src={project.image} alt={project.title} />
            </div>
            <div className='title_detailsP'>
              <h3 className='h3P'>{project.title}</h3>
              <Link to={`/project/${project.id}`} >
                <button className='buttonP'>Details</button>
              </Link>
            </div>
          </div>

        }

        )}
      </div>
    </section >
  )
}

export default Portfolio

