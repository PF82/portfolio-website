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
      <div className='underline'></div>

      <ul className='list'>
        <li className='item'>Personal Websites and Blogs</li>
        <li className='item'>Small Business Websites</li>
        <li className='item'>Corporate Websites</li>
        <li className='item'>Web and Mobile Applications</li>
      </ul>

      <h3 className='h3-skills'>TECHNICAL SKILLS</h3>
      <ul className='list-skills'>
        <li className='item'>Assessing{' '}
          <a
            href=""
            title='User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. UX design involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function'
            style={{ color: 'white', cursor: 'unset' }}
          >UX</a> and{' '}
          <a
            href="#"
            title='User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style'
            style={{ color: 'white', cursor: 'unset' }}
          >UI</a> designs for technical feasibility</li>
        <li className='item'>Creating websites, web and mobile applications, and landing pages from concept through deployment</li>
        <li className='item'>Maintaining, optimizing, troubleshooting, and improving websites and applications</li>
      </ul>

      <div className="logo-group">
        <div className='languages'>Programming Languages
          <div className="software-logo">
            <p className='web-technology'>HTML</p>
            <img className='web-technology-img' src={html} alt="HTML Logo" />
          </div>
          <div className="software-logo">
            <p className='web-technology'>CSS</p>
            <img className='web-technology-img' src={css} alt="CSS Logo" />
          </div>
          <div className="software-logo">
            <p className='web-technology'>Bootstrap</p>
            <img className='web-technology-img' src={bootstrap} alt="Bootstrap Logo" />
          </div>
          <div className="software-logo">
            <p className='web-technology'>JavaScript</p>
            <img className='web-technology-img' src={js} alt="JavaScript Logo" />
          </div>
        </div>
        <div className='frameworks'>Frameworks
          <div className="software-logo">
            <p className='web-technology'>React JS</p>
            <img className='web-technology-img' src={react} alt="React Logo" />
          </div>
          <div className="software-logo">
            <p className='web-technology'>Node JS</p>
            <img className='web-technology-img' src={node} alt="Node Logo" />
          </div>
        </div>
        <div className='databases'>Databases
          <div className="software-logo">
            <p className='web-technology'>SQL</p>
            <img className='web-technology-img' src={sql} alt="SQL Logo" />
          </div>
        </div>
        <div className='databases'>Cloud Infrastructure
          <div className="software-logo">
            <p className='web-technology'>Google Cloud</p>
            <img className='web-technology-img' src={sql} alt="SQL Logo" />
          </div>
          <div className="software-logo">
            <p className='web-technology'>AWS</p>
            <img className='web-technology-img' src={sql} alt="SQL Logo" />
          </div>
        </div>
        <div className='utilities'>Utilities
          <div className="software-logo">
            <p className='web-technology'>Visual Studio Code</p>
            <img className='web-technology-img' src={vsc} alt="Visual Studio Code Logo" />
          </div>
          <div className="software-logo">
            <p className='web-technology'>GitHub</p>
            <img className='web-technology-img' src={github} alt="GitHub Logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services