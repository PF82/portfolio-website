import React from 'react'
import '../sass/about.scss'
import { Link } from 'react-router-dom'
import Content from '../components/ReadMore'
import CountUp from 'react-countup';

const About = () => {

    return (
        <section className='sectionA'>
            <h1 className='h1A'>ABOUT ME</h1>
            <div className='divAA'></div>
            <br />
            <p>A resourceful, self-motivated and results-driven Junior UI/UX Designer / Front-End Developer with a passion for creating
                websites and web applications that are easy to navigate, aesthetically appealing, responsive, reliable and secure.</p>
            <br />
            <p>In addition to my love of web design and development, I am also interested in a range of integrated digital marketing
                services and search technologies in order to help clients get more reach and consequently boost their online audience.</p>
            <br />
            <p>You can find more about my skills, experience and education on my {' '}
                <Link to='/curriculumvitae'><button className='buttonAA'>Curriculum Vitae</button></Link>.
            </p>
            <br />
            <Content />
            <br />
            <p>While I have enjoyed being a Design Technician and a Quantity Surveyor for the past fifteen years, I was made redundant twice in my career.
                Being the first time during the 2008-2009 financial crisis and the second during the 2020-2021 pandemic which prompted me to consider a
                career switch in order to have more stability in my life.</p>
            <br />
            <p>Hence, the start of my new journey into the IT industry in December 2021 and since then I have never looked back.</p>

            <div className='divAB'>
                <article className='articleA'>
                    <span className='number' >
                        <CountUp
                            start={0}
                            end={5}
                            duration={3}
                        />
                    </span>
                    <p>Delivered Projects</p>
                </article>
                <article className='articleA'>
                    <span className='number' >
                        <CountUp
                            start={0}
                            end={545}
                            duration={3}
                        /> +
                    </span>
                    <p>Hours Worked</p>
                </article>
                <article className='articleA'>
                    <span className='number' >
                        <CountUp
                            start={0}
                            end={2}
                            duration={3}
                        />
                    </span>
                    <p>Happy Clients</p>
                </article>
            </div>
        </section>
    )
}

export default About