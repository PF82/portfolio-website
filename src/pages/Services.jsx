import React from 'react'
import styles from './services.module.css'

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
    <section className={styles.section}>
      <h1 className={styles.h1}>SERVICES</h1>
      <div className={styles.div}></div>

      <ul className={styles.ul}>
        <li>Personal Websites and Blogs</li>
        <li>Small Business Websites</li>
        <li>Corporate Websites</li>
        <li>Web and Mobile Applications</li>
      </ul>

      <h3 className={styles.h3}>TECHNICAL SKILLS</h3>
      <ul className={styles.ul}>
        <li>Assessing{' '}
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
        <li>Creating websites, web and mobile applications, and landing pages from concept through deployment</li>
        <li>Maintaining, optimizing, troubleshooting, and improving websites and applications</li>
      </ul>

      <h4 className={styles.h4}>BROWSER SOFTWARE</h4>
      <div className={styles.browser1}>
        <div className={styles.title_logo}>
          <p className={styles.p}>HTML</p>
          <img src={html} alt="HTML Logo" />
        </div>
        <div className={styles.title_logo}>
          <p className={styles.p}>CSS</p>
          <img src={css} alt="CSS Logo" />
        </div>
        <div className={styles.title_logo}>
          <p className={styles.p}>Bootstrap</p>
          <img src={bootstrap} alt="Bootstrap Logo" />
        </div>
      </div>

      <div className={styles.browser2}>
        <div className={styles.title_logo}>
          <p className={styles.p}>JavaScript</p>
          <img src={js} alt="JavaScript Logo" />
        </div>
        <div className={styles.title_logo}>
          <p className={styles.p}>React JS</p>
          <img src={react} alt="React JS Logo" />
        </div>
      </div>

      <h4 className={styles.h4}>SERVER SOFTWARE</h4>
      <div className={styles.server}>
        <div className={styles.title_logo}>
          <p className={styles.p}>Node JS</p>
          <img src={node} alt="Node JS Logo" />
        </div>
      </div>

      <h4 className={styles.h4}>DATABASE SOFTWARE</h4>
      <div className={styles.database}>
        <div className={styles.title_logo}>
          <p className={styles.p}>SQL</p>
          <img src={sql} alt="SQL Logo" />
        </div>
      </div>

      <h4 className={styles.h4}>CLOUD COMPUTING PLATFORMS</h4>
      <div className={styles.platform}>
        <div className={styles.title_logo}>
          <p className={styles.p}>Google Cloud</p>
          <img src={google} alt="Google Cloud Logo" style={{ width: "150px" }} />
        </div>
        <div className={styles.title_logo}>
          <p className={styles.p}>Netlify</p>
          <img src={netlify} alt="Netlify Logo" />
        </div>
        {/* <div className={styles.title_logo}>
          <p className={styles.p}>AWS</p>
          <img src={sql} alt="AWS Logo" />
        </div> */}
      </div>

      <h4 className={styles.h4}>CODE EDITOR & VERSION CONTROL AND COLLABORATION SOFTWARE</h4>
      <div className={styles.editControl}>
        <div className={styles.title_logo}>
          <p className={styles.p}>Visual Studio Code</p>
          <img src={vsc} alt="Visual Studio Code Logo" />
        </div>
        <div className={styles.title_logo}>
          <p className={styles.p}>GitHub</p>
          <img src={github} alt="GitHub Logo" />
        </div>
      </div>
    </section >
  )
}

export default Services