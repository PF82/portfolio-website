import React from 'react'
import '../sass/project.scss'
import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/portfolio'


const Project = () => {

  // retrieve params from url
  const params = useParams()

  const [currentProjectId, setCurrentProjectId] = React.useState(null)
  const [currentProjectData, setCurrentProjectData] = React.useState(null)

  React.useEffect(() => {
    // save param id on currentProjectId (using useState)
    if (params?.projectId) {
      setCurrentProjectId(params.projectId)
    }

  }, [params])

  React.useEffect(() => {
    // when currentProjectId changes, if is already there, then we filter the portfolio data to see which one 
    // has the same ID as the ID in the url params

    if (currentProjectId) {
      const currentProjectData = projectsData.filter((project) => {
        return project.id == currentProjectId
      })

      if (currentProjectData) {
        setCurrentProjectData(currentProjectData[0])
      }
    }

  }, [currentProjectId])

  return currentProjectData ?
    <section className='sectionPro' key={currentProjectData} >
      <div className="imagesPro">
        {currentProjectData.project_images.map((img, index) => {
          return <img 
          className='imgPro'
          src={img} 
          alt={`${currentProjectData.title}-${index}`} />
        })}
      </div>
      <br />
      <div className='dataPro'>
        <p><span>Title:</span>  {currentProjectData.title}</p>
        <p><span>Technologies:</span>  {currentProjectData.web_technologies}</p>
        <p><span>Development Time:</span>  {currentProjectData.development_time}</p>
        <br />
        <p><span>Client:</span>  {currentProjectData.client}</p>
        <p><span>Price:</span>  {currentProjectData.price}</p>
        <p><span>Date:</span>  {currentProjectData.date}</p>
        <br />
        <span>Highlight Features:</span>
        <p className='pPro'>  {currentProjectData.highlight_features}</p>
        <br />
        <p><span>Download:</span>  {currentProjectData.download}</p>
        <br />
        <Link to="/portfolio" >
          <button className='buttonPro' >Back to Portfolio</button>
        </Link>
      </div>
    </section> : <div>Loading...</div>
}

export default Project