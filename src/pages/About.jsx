import React from 'react'
import "../pages/about.css"

const About = () => {
  return (
    <section className='about'>
      <h1 className='h1-about'>ABOUT ME</h1>
      <div className='underline'></div>
      <br />
      <p>Working in office and on-site in previous positions, I managed (under minimum supervision) all
        the costs relating to Building and Civil Engineering projects. From the initial calculations to
        the final figures, I minimized the costs of the projects and enhanced value for money, while still
        achieving the required standards and quality as well as completing the projects within the original
        budget and on time.</p>
      <br />
      <p>I am pleased for having the opportunity to work for some great companies within the construction industry
        and I really enjoyed working as an Estimator/Quantity Surveyor and as an Architectural Technician.
        However, taking into consideration that I was made redundant 3 times in a span of 14 years, I decided
        to reconsider my career options.
      </p>
      <br />
      <p>And, that was when Web Development come into play in my life, which was through a friend that is a Full Stack Web
        Developer. Since then, I never looked back. He was my mentor throughout the code learning process, using
        an interacitve learning web platform.
      </p>
      <br />
      <p>You can find more about my formal education, specific training and work experience on{' '}
        <a
          className='link'
          href="https://www.linkedin.com/"
          target="_blank"><b>LinkedIn</b>
        </a>{' '}or by clicking on the button in the 'Home' section to download my resume.
      </p>
    </section>
  )
}

export default About