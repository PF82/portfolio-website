import React from 'react'
import '../sass/about.scss'

const About = () => {
  return (
    <section className='sectionA'>
      <h2 className='h1A'>ABOUT ME</h2>
      <div className='divA'></div>
      <br />
      <p>A resourceful, self-motivated and results-driven Junior Front End Developer with a passion for creating
        visually aesthetic, responsive and accessible websites and web applications.</p>
      <br />
      <p>Basic knowledge in a wide variety of programming languages (please refer to the 'Services'
        page for more). And a satisfactory understanding of the principles and techniques of building websites
        and applications from inception through completion. Ability to adapt in both{' '}
        <a
          href="https://www.indeed.com/career-advice/career-development/what-is-a-self-starter"
          title='Self-starters are professionals who take initiative, can work without supervision and begin projects independently at any level of their career and in any industry.'
          style={{ color: 'white', cursor: 'unset' }}
        >self-starting</a> and{' '} collaborative environments while staying focused on achieving the required
        standards and quality under strict deadlines.
      </p>
      <br />
      <p>Worked through 1300+ hours of coding lessons, exercises and projects on an interactive learning web platform called{' '}
        <a
          className='aA'
          href="https://www.freecodecamp.org/"
          target="_blank"
        ><b>freeCodeCamp</b></a>, with the assistance of a friend (using Microsoft Visual Studio Live Share)
        that is a Full Stack Web Developer. The course comprised four modules: Responsive Web Design, JavaScript Algorithms
        and Data Structures, Front End Development Libraries and Data Visualization. Additionally, I also read several
        articles and books about Web Development as well as started getting familiar with an artificial intelligence model
        called chatGPT which was launched by{' '}
        <a
          className='aA'
          href="https://openai.com/"
          target="_blank"
        ><b>OpenAI</b></a>{' '} in November 2022.
      </p>
      <br />
      <p>You can find more about my education and work experience by clicking on the button
        in the 'Home' page to download my resume or on{' '}
        <a
          className='aA'
          href="https://www.linkedin.com/"
          target="_blank"><b>LinkedIn</b>
        </a>.
      </p>
    </section>
  )
}

export default About