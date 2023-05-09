import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../sass/services.scss'

const Services = () => {
  return (
    <div className='sectionS'>
      <div className='waveBackground'>
        <section className='sectionTop'>
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1e90ff" fillOpacity={1} d="M0,160L21.8,160C43.6,160,87,160,131,144C174.5,128,218,96,262,74.7C305.5,53,349,43,393,85.3C436.4,128,480,224,524,224C567.3,224,611,128,655,106.7C698.2,85,742,139,785,149.3C829.1,160,873,128,916,101.3C960,75,1004,53,1047,42.7C1090.9,32,1135,32,1178,80C1221.8,128,1265,224,1309,224C1352.7,224,1396,128,1418,80L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
          </svg>
        </section>

        <section className='sectionBottom'></section>
      </div>

      <div className='containerS'>
        <h1 className='h1S'>SERVICES</h1>
        <div className='divS'></div>

        <Link className='btnS oneS' to="/services/webdevelopment">Web Development & Marketing</Link>
        <Link className='btnS twoS' to="/services/industries">Technical Skills & Industries</Link>
        <Link className='btnS threeS' to="/services/technologies">Technologies & Tools</Link>

        <Outlet />
      </div>
    </div >
  )
}

export default Services

