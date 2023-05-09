import React from "react";
import { NavLink } from "react-router-dom";

import logo1 from "../images/navbar/logo.png"
import logo2 from "../images/navbar/logo.png"
import photo from "../images/navbar/photo.png"

import '../sass/navbar.scss'

import { FaHome, FaUser, FaWindows, FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdReviews } from "react-icons/md";

const year = new Date().getFullYear()

const Navbar = () => {
  return (
    <nav>
      <section className='sectionN'>
        <img src={logo1} alt="logo" className='logoN' title="" />
        <img src={photo} alt="personal_photo" className='photoN' title="" />

        <ul className='ulN'>
          <NavLink className='linkN' to="/" activeclassname='active'>
            <span className='iconN one'><FaHome /></span>
            <span className="textN">Home</span>
          </NavLink>
          <NavLink className='linkN' to="/about">
            <span className='iconN two'><FaUser /></span>
            <span className="textN">About</span>
          </NavLink>
          <NavLink className='linkN' to="/services">
            <span className='iconN three'><MdOutlineMiscellaneousServices /></span>
            <span className="textN">Services</span>
          </NavLink>
          <NavLink className='linkN' to="/portfolio">
            <span className='iconN four'><FaWindows /></span>
            <span className="textN">Portfolio</span>
          </NavLink>
          <NavLink className='linkN' to="/testimonials">
            <span className='iconN five'><MdReviews /></span>
            <span className="textN">Testimonials</span>
          </NavLink>
          <NavLink className='linkN' to="/contact">
            <span className='iconN six'><FaEnvelope /></span>
            <span className="textN">Contact</span>
          </NavLink>
        </ul>

        <i className='iN'>
          <a href="https://github.com/PF82" title="GitHub" target="_blank" rel="noreferrer">
            <FaGithub className='githubN' />
          </a>
          <a href="https://www.linkedin.com/in/pedro-fernandes-b59461236/" title="LinkedIn" target="_blank" rel="noreferrer">
            <FaLinkedin className='linkedinN' />
          </a>
          <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noreferrer">
            <FaFacebook className='facebookN' />
          </a>
        </i>

        <footer>
          <span className="copy-right">© {year}, Powered by </span>
          <img src={logo2} alt="small-logo" title="" className='smallLogoN' />
        </footer>
      </section>
    </nav>
  )
}

export default Navbar

