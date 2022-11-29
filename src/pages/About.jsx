import React from 'react'
import "../pages/about.css"

const About = () => {
  return (
    <section className='about'>
      <h1 className='h1-about'>ABOUT ME</h1>
      <div className='underline'></div>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro labore
        facilis nulla earum ipsa corrupti commodi fuga. Mollitia laudantium id
        rem molestias impedit doloremque asperiores quam natus temporibus, alias veniam.</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        illum sed vero corporis repellat dolor, eligendi minima earum quas labore
        commodi ab minus distinctio dignissimos doloremque deleniti eaque
        assumenda quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur ipsa veritatis, possimus deserunt suscipit praesentium aperiam
        numquam labore, reprehenderit ex, mollitia minima! Laboriosam eveniet, magni
        sint suscipit vero laudantium consequuntur?</p>
      <br />
      <p>You can find more about my experience on{' '}
        <a
          className='link'
          href="https://www.linkedin.com/"
          target="_blank"><b>LinkedIn</b>
        </a>{' '}or by clicking on the button in the 'Home' section to download my CV.
        If you're interested in my open source work, check{' '}
        <a
          className='link'
          href="https://www.github.com/"
          target="_blank"><b>GitHub</b>
        </a>.{' '}And, if you want to chat, please feel free to send me a message on{' '}
        <a
          className='link'
          href="https://www.facebook.com/"
          target="_blank"><b>Facebook</b>
        </a>{' '}or submit it through the 'Contact' section on this website.
      </p>
    </section>
  )
}

export default About