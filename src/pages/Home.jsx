import React from 'react'
import "../pages/home.css"
import office from "../assets/office.jpg"
import Greeting from "../components/Greeting"
import { FaDownload } from "react-icons/fa";

const Home = () => {

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Portfolio.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Portfolio.pdf';
        alink.click();
      })
    })
  }

  return (
    <section className='home'>
      <figure className='container'>
        <img src={office} className="office-img" alt="Background image" />
        <figcaption className='description'>
          <h5 className='h5-home'><Greeting /> I'm</h5>
          <h2 className='h2-home'>Pedro Fernandes.</h2>
          <h3 className='h3-home'>Junior Front-End Developer</h3>
          <h4 className='h4-home'>based in London.</h4>
        </figcaption>
        <button className='button' onClick={onButtonClick}>
          <i><FaDownload className="fadownload" /></i>Download Resume
        </button>
      </figure>
    </section>
  )
}

export default Home