import React from 'react'
import "../pages/services.css"

import html from "../assets/html.jpg"
import css from "../assets/css.jpg"
import bootstrap from "../assets/bootstrap.jpg"
import js from "../assets/js.jpg"
import react from "../assets/react.jpg"
import node from "../assets/node.jpg"
import sql from "../assets/sql.jpg"
import google from "../assets/google-cloud.jpg"
import netlify from "../assets/netlify.png"
import vsc from "../assets/visual-studio-code.jpeg"
import github from "../assets/github.png"


const Services = () => {
  return (
    <section className='services'>
      <h1 className='h1-services'>SERVICES</h1>
      <div className='underline'></div>

      <ul className='list-services'>
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

      <h4 className='h4-browser'>BROWSER SOFTWARE</h4>
      <div className='browser-1'>
        <div className="title-logo">
          <p className='web-technology-title'>HTML</p>
          <img className='web-technology-logo' src={html} alt="HTML Logo" />
        </div>
        <div className="title-logo">
          <p className='web-technology-title'>CSS</p>
          <img className='web-technology-logo' src={css} alt="CSS Logo" />
        </div>
        <div className="title-logo">
          <p className='web-technology-title'>Bootstrap</p>
          <img className='web-technology-logo' src={bootstrap} alt="Bootstrap Logo" />
        </div>
           </div>

      <div className='browser-2'>
             <div className="title-logo">
          <p className='web-technology-title'>JavaScript</p>
          <img className='web-technology-logo' src={js} alt="JavaScript Logo" />
        </div>
        <div className="title-logo">
          <p className='web-technology-title'>React JS</p>
          <img className='web-technology-logo' src={react} alt="React JS Logo" />
        </div>
      </div>

      <h4 className='h4-server'>SERVER SOFTWARE</h4>
      <div className='server'>
        <div className="title-logo">
          <p className='web-technology-title'>Node JS</p>
          <img className='web-technology-logo' src={node} alt="Node JS Logo" />
        </div>
      </div>

      <h4 className='h4-database'>DATABASE SOFTWARE</h4>
      <div className='database'>
        <div className="title-logo">
          <p className='web-technology-title'>SQL</p>
          <img className='web-technology-logo' src={sql} alt="SQL Logo" />
        </div>
      </div>

      <h4 className='h4-database'>CLOUD COMPUTING PLATFORMS</h4>
      <div className='platform'>
        <div className="title-logo">
          <p className='web-technology-title'>Google Cloud</p>
          <img className='web-technology-logo' src={google} alt="Google Cloud Logo" style={{width:"150px"}}/>
        </div>
        <div className="title-logo">
          <p className='web-technology-title'>Netlify</p>
          <img className='web-technology-logo' src={netlify} alt="Netlify Logo" />
        </div>
        {/* <div className="title-logo">
          <p className='web-technology-title'>AWS</p>
          <img className='web-technology-logo' src={sql} alt="AWS Logo" />
        </div> */}
      </div>

      <h4 className='h4-database'>SOURCE-CODE EDITOR AND VERSION CONTROL SOFTWARE</h4>
      <div className='editor-control'>
        <div className="title-logo">
          <p className='web-technology-title'>Visual Studio Code</p>
          <img className='web-technology-logo' src={vsc} alt="Visual Studio Code Logo" />
        </div>
        <div className="title-logo">
          <p className='web-technology-title'>GitHub</p>
          <img className='web-technology-logo' src={github} alt="GitHub Logo" />
        </div>
      </div>
    </section >
  )
}

export default Services