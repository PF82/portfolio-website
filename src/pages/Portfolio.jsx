import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../sass/portfolio.scss'
import video1 from '../videos/video1.mp4';

const Portfolio = () => {

  return (
    <section className='sectionP'>
      <video playsInline autoPlay loop muted className='videoP' >
        <source src={video1} type='video/mp4' />
      </video>

      <div className='containerP'>
        <h1 className='h1P'>PORTFOLIO</h1>
        <div className='divP'></div>

        <Link className='btnP oneP' to="/portfolio/smallprojects">Small Projects</Link>
        <Link className='btnP two P' to="/portfolio/mainprojects">Main Projects</Link>

        <Outlet />
      </div>
    </section >
  )
}

export default Portfolio

