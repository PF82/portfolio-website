import React from 'react'
import './home.scss'
import office from "../images/home/office.jpg"
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
    <section className='sectionH'>
      <figure className='figureH'>
        <img src={office} className='imgH' alt="Background image" />
        <figcaption className='figcaptionH'>
          <h5 className='h5H'><Greeting /></h5>
          <h3 className='h3H'>Welcome to my website!</h3>
          <h2 className='h2H'>I'm Pedro Fernandes.</h2>
          <h1 className='h1H'>Front End Developer</h1>
          <h4 className='h4H'>based in London.</h4>
        </figcaption>
        <button className='buttonH' onClick={onButtonClick}>
          <i><FaDownload className='iH' /></i>Download Resume
        </button>
      </figure>
    </section>
  )
}

export default Home