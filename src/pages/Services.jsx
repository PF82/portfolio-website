import React from 'react'
import './services.scss'

import html from "../images/html.jpg"
import css from "../images/css.jpg"
import bootstrap from "../images/bootstrap.jpg"
import js from "../images/js.jpg"
import react from "../images/react.jpg"
import node from "../images/node.jpg"
import sql from "../images/sql.jpg"
import google from "../images/google-cloud.jpg"
import netlify from "../images/netlify.png"
import vsc from "../images/visual-studio-code.jpeg"
import github from "../images/github.png"


const Services = () => {
  return (
    <section className='sectionS'>
      <h1 className='h1S'>SERVICES</h1>
      <div className='divS'></div>

      <ul className='ulS'>
        <li>Personal Websites and Blogs</li>
        <li>Small Business Websites</li>
        <li>Corporate Websites</li>
        <li>Web and Mobile Applications</li>
      </ul>

      <h3 className='h3S'>TECHNICAL SKILLS</h3>
      <ol className='ulS'>
        <li>Assessing{' '}
          <a
            href="https://www.interaction-design.org/literature/topics/ux-design"
            title='User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. UX design involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function'
            style={{ color: 'white', cursor: 'unset' }}
          >UX</a> and{' '}
          <a
            href="https://www.interaction-design.org/literature/topics/ui-design"
            title='User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style'
            style={{ color: 'white', cursor: 'unset' }}
          >UI</a> designs for technical feasibility</li>
        <li>Creating websites, web and mobile applications, and landing pages from concept through deployment</li>
        <li>Maintaining, optimizing, troubleshooting, and improving websites and applications</li>
      </ol>

      <h4 className='h4S'>BROWSER SOFTWARE</h4>
      <div className='browser1S'>
        <div className='title_logoS'>
          <p className='pS'>HTML</p>
          <img src={html} alt="HTML Logo" />
        </div>
        <div className='title_logoS'>
          <p className='pS'>CSS</p>
          <img src={css} alt="CSS Logo" />
        </div>
        <div className='title_logoS'>
          <p className='pS'>Bootstrap</p>
          <img src={bootstrap} alt="Bootstrap Logo" />
        </div>
      </div>

      <div className='browser2S'>
        <div className='title_logoS'>
          <p className='pS'>JavaScript</p>
          <img src={js} alt="JavaScript Logo" />
        </div>
        <div className='title_logoS'>
          <p className='pS'>React JS</p>
          <img src={react} alt="React JS Logo" />
        </div>
      </div>

      <h4 className='h4S'>SERVER SOFTWARE</h4>
      <div className='serverS'>
        <div className='title_logoS'>
          <p className='pS'>Node JS</p>
          <img src={node} alt="Node JS Logo" />
        </div>
      </div>

      <h4 className='h4S'>DATABASE SOFTWARE</h4>
      <div className='databaseS'>
        <div className='title_logoS'>
          <p className='pS'>SQL</p>
          <img src={sql} alt="SQL Logo" />
        </div>
      </div>

      <h4 className='h4S'>CLOUD COMPUTING PLATFORMS</h4>
      <div className='platformS'>
        <div className='title_logoS'>
          <p className='pS'>Google Cloud</p>
          <img src={google} alt="Google Cloud Logo" style={{ width: "150px" }} />
        </div>
        <div className='title_logoS'>
          <p className='pS'>Netlify</p>
          <img src={netlify} alt="Netlify Logo" />
        </div>
        {/* <div className='title_logoS'>
          <p className='pS'>AWS</p>
          <img src={sql} alt="AWS Logo" />
        </div> */}
      </div>

      <h4 className='h4S'>CODE EDITOR & VERSION CONTROL AND COLLABORATION SOFTWARE</h4>
      <div className='editControlS'>
        <div className='title_logoS'>
          <p className='pS'>Visual Studio Code</p>
          <img src={vsc} alt="Visual Studio Code Logo" />
        </div>
        <div className='title_logoS'>
          <p className='pS'>GitHub</p>
          <img src={github} alt="GitHub Logo" />
        </div>
      </div>
    </section >
  )
}

export default Services