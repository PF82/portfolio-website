import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import logo from "../assets/pf.jpg"
import photo from "../assets/photo.jpg"

import "../components/navbar.css"

import { FaHome, FaUser, FaWindows, FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" className='logo' title="Company Logo" />
      <img src={photo} alt="Photo" className='photo' title="Photo" />

      <ul className="links">
        <li className="nb-1">
          <FaHome className="fahome" />
          <Link to="/">Home</Link>
        </li>
        <li className="nb-1">
          <FaUser className="fauser" />
          <Link to="/about">About</Link>
        </li>
        <li className="nb-1">
          <FaWindows className="fawindows" />
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nb-1">
          <MdOutlineMiscellaneousServices className="miscellaneousservices" />
          <Link to="/services">Services</Link>
        </li>
        <li className="nb-1">
          <RiMoneyPoundCircleFill className="circlefill" />
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="nb-1">
          <MdReviews className="mdreviews" />
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="nb-1">
          <FaEnvelope className="faenvelope" />
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <i className="social-icons">
        <a href="https://www.linkedin.com/" title="LinkedIn" target="_blank">
          <FaLinkedin name="lklas" className="linkedin" />
        </a>
        <a href="https://www.facebook.com/" title="Facebook" target="_blank">
          <FaFacebook className="facebook" />
        </a>
        <a href="https://www.whatsapp.com/" title="WhatsApp" target="_blank">
          <FaWhatsapp className="whatsapp" />
        </a>
        <a href="https://www.github.com/" title="GitHub" target="_blank">
          <FaGithub className="github" />
        </a>
      </i>

      <footer>
        <p className="copy-right">© 2022, Powered by </p>
        <a href="https://www.pedro-fernandes.co.uk/" title="Company Logo" target="_blank">
          <img src={logo} alt="small-logo" className="small-logo" />
        </a>
      </footer>
    </nav>
  )
}

export default Navbar

