import React from 'react'
import styles from './home.module.css'
import office from "../images/office.jpg"
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
    <section className={styles.section}>
      <figure className={styles.figure}>
        <img src={office} className={styles.img} alt="Background image" />
        <figcaption className={styles.figcaption}>
          <h5 className={styles.h5}><Greeting /> I'm</h5>
          <h2 className={styles.h2}>Pedro Fernandes.</h2>
          <h3 className={styles.h3}>Junior Front-End Developer</h3>
          <h4 className={styles.h4}>based in London.</h4>
        </figcaption>
        <button className={styles.button} onClick={onButtonClick}>
          <i><FaDownload className={styles.i} /></i>Download Resume
        </button>
      </figure>
    </section>
  )
}

export default Home