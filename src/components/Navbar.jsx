import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/navbar/logo.jpg"
import photo from "../images/navbar/photo.jpg"

import '../sass/navbar.scss'

import { FaHome, FaUser, FaWindows, FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
// import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <section className='sectionN'>
        <img src={logo} alt="Company Logo" className='logoN' title="Company Logo" />
        <img src={photo} alt="Personal Photo" className='photoN' title="Personal Photo" />

        <ul className='ulN'>
          <li className='liN'>
            <FaHome className='iconNH' />
            <Link className='linkN' to="/">Home</Link>
          </li>
          <li className='liN'>
            <FaUser className='iconNA' />
            <Link className='linkN' to="/about">About</Link>
          </li>
          <li className='liN'>
            <MdOutlineMiscellaneousServices className='iconNS' />
            <Link className='linkN' to="/services">Services</Link>
          </li>
          <li className='liN'>
            <FaWindows className='iconNP' />
            <Link className='linkN' to="/portfolio">Portfolio</Link>
          </li>
          {/* <li className='liN'>
            <RiMoneyPoundCircleFill className='iconNPR' />
            <Link className='linkN' to="/pricing">Pricing</Link>
          </li> */}
          <li className='liN'>
            <MdReviews className='iconNR' />
            <Link className='linkN' to="/reviews">Reviews</Link>
          </li>
          <li className='liN'>
            <FaEnvelope className='iconNC' />
            <Link className='linkN' to="/contact">Contact</Link>
          </li>
        </ul>

        <i className='iN'>
          <a href="https://www.linkedin.com/" title="LinkedIn" target="_blank">
            <FaLinkedin name="lklas" className='linkedinN' />
          </a>
          {/* <a href="https://www.facebook.com/" title="Facebook" target="_blank">
          <FaFacebook className='facebookN' />
        </a> */}
          <a href="https://www.github.com/" title="GitHub" target="_blank">
            <FaGithub className='githubN' />
          </a>
          <a href="https://www.whatsapp.com/" title="WhatsApp" target="_blank">
            <FaWhatsapp className='whatsappN' />
          </a>
        </i>

        <footer>
          <span className="copy-right">© 2022, Powered by </span>
          <a href="https://www.pf.co.uk/" title="Company Logo" target="_blank">
            <img src={logo} alt="small-logo" className='smallLogoN' />
          </a>
        </footer>
      </section>
    </nav>
  )
}

export default Navbar

