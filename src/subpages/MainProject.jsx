import React, { useState } from 'react'
import '../sass/mainproject.scss'
import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/portfolio-main-projects'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle, IoIosCloseCircle } from "react-icons/io";

const MainProject = () => {

  const params = useParams()

  const [currentProjectId, setCurrentProjectId] = React.useState(null)
  const [currentProjectData, setCurrentProjectData] = React.useState(null)

  React.useEffect(() => {
    if (params?.projectId) {
      setCurrentProjectId(params.projectId)
    }

  }, [params])

  React.useEffect(() => {
    if (currentProjectId) {
      const currentProjectData = projectsData.filter((project) => {
        return project.id == currentProjectId
      })

      if (currentProjectData) {
        setCurrentProjectData(currentProjectData[0])
      }
    }

  }, [currentProjectId])

  const [data, setData] = useState({ img: '', i: 0 })

  const viewImage = (img, i) => {
    setData({ img, i })
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: currentProjectData.project_images[i + 1], i: i + 1 })
    }
    if (action === 'previous-img') {
      setData({ img: currentProjectData.project_images[i - 1], i: i - 1 })
    }
    if (!action) {
      setData({ img: '', i: 0 })
    }
  }

  return currentProjectData ?
    <section className='sectionMPro' key={currentProjectData} >

      {data.img &&
        <div className='buttons-and-img'>
          <div onClick={() => imgAction()} className='buttonAMPro'><IoIosCloseCircle className='iconCMPro' /></div>
          <div onClick={() => imgAction('previous-img')} className='buttonBMPro'><IoIosArrowDropleftCircle className='iconLMPro' /></div>
          <img src={data.img} alt="" className='imgAMPro' />
          <div onClick={() => imgAction('next-img')} className='buttonCMPro'><IoIosArrowDroprightCircle className='iconRMPro' /></div>
        </div>
      }

      <div className="imagesMPro">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='20px'>
            {currentProjectData.project_images.map((image, index) => (
              <img
                className='imgBMPro'
                key={index}
                src={image}
                alt={`${currentProjectData.title}-${index}`}
                onClick={() => viewImage(image, index)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <br />

      <div className='dataMPro'>
        <div><span>Title:</span>  {currentProjectData.title}</div>
        <div><span>Technologies:</span>  {currentProjectData.web_technologies}</div>
        <div><span>Client:</span>  {currentProjectData.client}</div>
        <div><span>Date:</span>  {currentProjectData.date}</div>
        <br />
        <span>Highlight Features:</span>
        <div className='pMPro'>  {currentProjectData.highlight_features}</div>
        <br />
        <div><span>Visit Site:</span></div>
        <div className='divMPro'>  {currentProjectData.site}</div>
        <br />
        <Link to="/portfolio/mainprojects" >
          <button className='buttonMPro' >Back to Main Projects</button>
        </Link>
      </div>

    </section> : <div>Loading...</div>
}

export default MainProject;