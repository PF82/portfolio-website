import React from 'react'
import '../sass/project.scss'
import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/portfolio'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


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

  // const [data, setData] = React.useState({ img: '', i: 0 })

  // const viewImage = (img, i) => {
  //   setData({ img, i })
  // }

  // const imgAction = (action) => {
  //   let i = data.i;
  //   if (action === 'next-img') {
  //     setData({ img: currentProjectData.project_images[i + 1], i: i + 1 })
  //   }
  //   if (action === 'previous-img') {
  //     setData({ img: currentProjectData.project_images[i - 1], i: i - 1 })
  //   }
  //   if (!action) {
  //     setData({ img: '', i: 0 })
  //   }
  // }

  // return (
  //   <>
  //     {data.img &&
  //       <div style={{
  //         width: '100%',
  //         height: '100vh',
  //         background: 'black',
  //         position: 'fixed',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         overflow: 'hidden',
  //       }}>
  //         <button onClick={() => imgAction()} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
  //         <button onClick={() => imgAction('previous-img')}>Previous</button>
  //         <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} alt="" />
  //         <button onClick={() => imgAction('next-img')}>Next</button>
  //       </div>
  //     }
  //     <section className='sectionPro' key={currentProjectData} >
  //       <div className="imagesPro">
  //         <ResponsiveMasonry
  //           columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
  //         >
  //           <Masonry gutter='20px'>
  //             {currentProjectData.project_images.map((image, i) => (
  //               <img
  //                 key={i}
  //                 src={image}
  //                 style={{ width: "100%", display: "block", cursor: 'pointer' }}
  //                 alt=""
  //                 onClick={() => viewImage(image, i)}
  //               />
  //             ))}
  //           </Masonry>
  //         </ResponsiveMasonry>
  //       </div>
  //       <br />
  //       <div className='dataPro'>
  //         <p><span>Title:</span>  {currentProjectData.title}</p>
  //         <p><span>Technologies:</span>  {currentProjectData.web_technologies}</p>
  //         <p><span>Development Time:</span>  {currentProjectData.development_time}</p>
  //         <br />
  //         <p><span>Client:</span>  {currentProjectData.client}</p>
  //         <p><span>Price:</span>  {currentProjectData.price}</p>
  //         <p><span>Date:</span>  {currentProjectData.date}</p>
  //         <br />
  //         <span>Highlight Features:</span>
  //         <p className='pPro'>  {currentProjectData.highlight_features}</p>
  //         <br />
  //         <p><span>Download:</span>  {currentProjectData.download}</p>
  //         <br />
  //         <Link to="/portfolio" >
  //           <button className='buttonPro' >Back to Portfolio</button>
  //         </Link>
  //       </div>
  //     </section> : <div>Loading...</div>
  //   </>
  // )
}

export default Project