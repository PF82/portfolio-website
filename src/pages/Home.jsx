import React from 'react'
import '../sass/home.scss'
import office from "../images/home/office.png"
import Greeting from "../components/Greeting"
import TypeWriterEffect from 'react-typewriter-effect';
import video4 from '../videos/video2.mp4';

const Home = () => {

  return (
    <section className='sectionH'>
      <figure className='figureH'>
        <img src={office} className='imgH' alt="Background_image" title='Office Desk' />
        <div className='overlayH'>
          <video src={video4} autoPlay loop muted className='videoH' />
        </div>
        <figcaption className='figcaptionH'>
          <h5 className='h5H'>
            <Greeting />
          </h5>
          <h3 className='h3H'>
            <TypeWriterEffect
              startDelay={100}
              typeSpeed={50}
              hideCursorAfterText="true"
              cursorColor="black"
              text="Welcome to my website!"
            />
          </h3>
          <h2 className='h2H1'>
            <TypeWriterEffect
              startDelay={1500}
              typeSpeed={50}
              hideCursorAfterText="true"
              cursorColor="black"
              text="I'm"
            />
          </h2>
          <h2 className='h2H2'>
            <TypeWriterEffect
              startDelay={1500}
              typeSpeed={50}
              hideCursorAfterText="true"
              cursorColor="#1e90ff"
              text="Pedro Fernandes,"
            />
          </h2>
          <h1 className='h1H'>
            <TypeWriterEffect
              startDelay={3000}
              typeSpeed={50}
              hideCursorAfterText="true"
              cursorColor="black"
              text="Front-End Developer"
            />
          </h1>
          <h4 className='h4H'>
            <TypeWriterEffect
              startDelay={4500}
              typeSpeed={50}
              hideCursorAfterText="true"
              cursorColor="black"
              text="based in London."
            />
          </h4>
        </figcaption>
      </figure>
    </section>
  )
}

export default Home