import React from 'react'
import '../sass/industries.scss'
import img from '../images/services/ghost-white.png'

const Industries = () => {
  return (
    <section className='sectionInd'>
      <div className='divInd'>
        <h3>TECHNICAL SKILLS</h3>
        <ul className='ulInd-1'>
          <li className='liInd-1'>Assessing
            <a
              href="https://www.interaction-design.org/literature/topics/ux-design"
              title='User experience (UX) design is the process used to create products that provide meaningful and relevant experiences to users. UX design involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function'
              style={{ color: 'white', cursor: 'unset', textDecoration: 'underline', margin: '0 5px' }}
            >UX</a>and
            <a
              href="https://www.interaction-design.org/literature/topics/ui-design"
              title='User interface (UI) design is the process used to build interfaces in or computerized devices, focusing on looks or style'
              style={{ color: 'white', cursor: 'unset', textDecoration: 'underline', margin: '0 5px' }}
            >UI</a>designs for technical feasibility and striking a balance between functional and aesthetic designs</li>
          <li className='liInd-2'>Deciding websites and web applications design and structure</li>
          <li>Developing websites and apps that are easy to navigate, attractive, responsive and fast-loading</li>
          <li>Applying SEO (Search Engine Optimization) best practices</li>
          <li>Collecting and analysing usage data to improve and optimize performance efficiency</li>
        </ul>

        <h3>INDUSTRIES</h3>
        <ul id="hexGrid">
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Finance</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Real Estate</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Healthcare</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Retail</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Transportation</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Hospitality</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Construction</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Automotive</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Technology</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Government</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Logistics</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Agriculture</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Energy</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Manufacturing</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Sports</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Travel</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Education</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Utilities</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Media</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Insurance</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Entertainment</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Pharmaceutical</p>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <img src={img} alt="" />
              <p>Mining</p>
            </div>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Industries
