import React from 'react'
import "../pages/home.css"
import office from "../assets/office.jpg"
import Greeting from "../components/Greeting"

const Home = () => {
  return (
    <section className='home'>
      <figure className='container'>
        <img src={office} className="office-img" alt="Background image" />
        <figcaption className='description'>
          <span className='span1'><Greeting /> I'm</span>
          <br />
          <span className='span2'>Pedro Fernandes.</span>
          <br />
          <span className='span3'>Junior Web Developer</span>
          <br />
          <span className='span4'>based in London.</span>
        </figcaption>
      </figure>
    </section>
  )
}

export default Home