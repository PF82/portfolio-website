import React from 'react'
import '../sass/smallproject.scss'
import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/portfolio-small-projects'

const SmallProject = () => {

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

  return currentProjectData ?
    <section className='sectionSPro' key={currentProjectData} >

      <div className='containerSPro'>
        <div className='box'>
          <img src={currentProjectData.project_image_1} alt={currentProjectData.project_title_1} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_1}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_1}</div>
              </div>
              <a href={currentProjectData.project_website_1} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_2} alt={currentProjectData.project_title_2} className='imageSPro' />
          <div className='overlaySPro'>
            <div className='test'>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_2}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_2}</div>
              </div>
              <a href={currentProjectData.project_website_2} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_3} alt={currentProjectData.project_title_3} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_3}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_3}</div>
              </div>
              <a href={currentProjectData.project_website_3} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_4} alt={currentProjectData.project_title_4} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_4}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_4}</div>
              </div>
              <a href={currentProjectData.project_website_4} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_5} alt={currentProjectData.project_title_5} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_5}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_5}</div>
              </div>
              <a href={currentProjectData.project_website_5} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_6} alt={currentProjectData.project_title_6} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_6}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_6}</div>
              </div>
              <a href={currentProjectData.project_website_6} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_7} alt={currentProjectData.project_title_7} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_7}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_7}</div>
              </div>
              <a href={currentProjectData.project_website_7} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_8} alt={currentProjectData.project_title_8} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_8}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_8}</div>
              </div>
              <a href={currentProjectData.project_website_8} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_9} alt={currentProjectData.project_title_9} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_9}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_9}</div>
              </div>
              <a href={currentProjectData.project_website_9} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_10} alt={currentProjectData.project_title_10} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_10}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_10}</div>
              </div>
              <a href={currentProjectData.project_website_10} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_11} alt={currentProjectData.project_title_11} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_11}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_11}</div>
              </div>
              <a href={currentProjectData.project_website_11} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_12} alt={currentProjectData.project_title_12} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_12}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_12}</div>
              </div>
              <a href={currentProjectData.project_website_12} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_13} alt={currentProjectData.project_title_13} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_13}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_13}</div>
              </div>
              <a href={currentProjectData.project_website_13} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_14} alt={currentProjectData.project_title_14} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_14}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_14}</div>
              </div>
              <a href={currentProjectData.project_website_14} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_15} alt={currentProjectData.project_title_15} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_15}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_15}</div>
              </div>
              <a href={currentProjectData.project_website_15} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_16} alt={currentProjectData.project_title_16} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_16}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_16}</div>
              </div>
              <a href={currentProjectData.project_website_16} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_17} alt={currentProjectData.project_title_17} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_17}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_17}</div>
              </div>
              <a href={currentProjectData.project_website_17} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_18} alt={currentProjectData.project_title_18} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_18}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_18}</div>
              </div>
              <a href={currentProjectData.project_website_18} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_19} alt={currentProjectData.project_title_19} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_19}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_19}</div>
              </div>
              <a href={currentProjectData.project_website_19} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className='box'>
          <img src={currentProjectData.project_image_20} alt={currentProjectData.project_title_20} className='imageSPro' />
          <div className='overlaySPro'>
            <div>
              <div>
                <div className='titleSPro'>{currentProjectData.project_title_20}</div>
                <div className='subjectSPro'>{currentProjectData.project_subject_20}</div>
              </div>
              <a href={currentProjectData.project_website_20} target='_blank' rel="noreferrer">
                <button className='buttonSPro'>Visit Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Link to="/portfolio/smallprojects" >
        <button className='buttonSPro-1' >Back to Small Projects</button>
      </Link>


    </section > : <div>Loading...</div>
}

export default SmallProject