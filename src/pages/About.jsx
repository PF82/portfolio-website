import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>ABOUT ME</h1>
      <div className={styles.div}></div>
      <br />
      <p>A results-driven and self-motivated Junior Front-End Developer with a passion for creating visually
        aesthetic, responsive and accessible websites and web applications. Basic knowledge in a wide variety of
        web technologies as well as the principles and techniques of building websites and applications from
        inception through completion. Ability to adapt in both self-starting and collaborative environments while
        staying focused on achieving the required standards and quality under strict deadlines.
        .</p>
      <br />
      <p>Worked through 1300+ hours of freecodecamp structure with the assistance of a friend that is working
        as a Full Stack Web Developer, learning Responsive Web Design, JavaScript Algorithms
        and Data Structures, Front End Development Libraries and Data Visualization.
      </p>
      <br />
      <p>You can find more about my formal education, specific training and work experience on{' '}
        <a
          className={styles.a}
          href="https://www.linkedin.com/"
          target="_blank"><b>LinkedIn</b>
        </a>{' '}or by clicking on the button in the 'Home' section to download my resume.
      </p>
    </section>
  )
}

export default About