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
          <p className='technology'>HTML</p>
          <img className='technology-img' src={html} alt="HTML Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>CSS</p>
          <img className='technology-img' src={css} alt="CSS Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>Bootstrap</p>
          <img className='technology-img' src={bootstrap} alt="Bootstrap Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>JavaScript</p>
          <img className='technology-img' src={js} alt="JavaScript Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>React</p>
          <img className='technology-img' src={react} alt="React Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>Node</p>
          <img className='technology-img' src={node} alt="Node Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>Visual Studio Code</p>
          <img className='technology-img' src={vsc} alt="Visual Studio Code Logo"/>
        </div>
        <div className="software-logo">
          <p className='technology'>GitHub</p>
          <img className='technology-img' src={github} alt="GitHub Logo"/>
        </div>
      </div>
    </section>
  )
}

export default Services