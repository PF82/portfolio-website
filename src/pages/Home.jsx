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
          <h4 className='h4-home'><Greeting /> I'm</h4>
          <h2 className='h2-home'>Pedro Fernandes.</h2>
          <h1 className='h1-home'>Junior Web Developer</h1>
          <h3 className='h3-home'>based in London.</h3>
        </figcaption>
      </figure>
    </section>
  )
}

export default Home