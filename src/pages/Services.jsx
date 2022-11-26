import React from 'react'
import "../pages/services.css"

import html from "../assets/html.jpg"
import css from "../assets/css.jpg"
import bootstrap from "../assets/bootstrap.jpg"
import js from "../assets/js.jpg"
import react from "../assets/react.jpg"
import node from "../assets/node.jpg"
import vsc from "../assets/visual-studio-code.jpeg"
import github from "../assets/github.png"
import sql from "../assets/sql.jpg"

const Services = () => {
  return (
    <section className='services'>
      <h1 className='h1-services'>SERVICES</h1>
      <ul className='list'>
        <li className='item'>Personal Websites</li>
        <li className='item'>Small Business Websites</li>
        <li className='item'>Corporate Websites</li>
        <li className='item'>Web Applications</li>
      </ul>

      <h3 className='h3-services'>MAIN SKILLS</h3>
      <div className="logo-group">
        <div className="software-logo">
          <p className='web-technology'>HTML</p>
          <img className='web-technology-img' src={html} alt="HTML Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>CSS</p>
          <img className='web-technology-img' src={css} alt="CSS Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>Bootstrap</p>
          <img className='web-technology-img' src={bootstrap} alt="Bootstrap Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>JavaScript</p>
          <img className='web-technology-img' src={js} alt="JavaScript Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>React</p>
          <img className='web-technology-img' src={react} alt="React Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>Node</p>
          <img className='web-technology-img' src={node} alt="Node Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>SQL</p>
          <img className='web-technology-img' src={sql} alt="SQL Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>Visual Studio Code</p>
          <img className='web-technology-img' src={vsc} alt="Visual Studio Code Logo"/>
        </div>
        <div className="software-logo">
          <p className='web-technology'>GitHub</p>
          <img className='web-technology-img' src={github} alt="GitHub Logo"/>
        </div>
      </div>
    </section>
  )
}

export default Services