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
      <img src={logo} alt="logo" className='logo' />
      <img src={photo} alt="photo" className='photo' />

      <ul className="links">
        <li className="nb-1">
          <FaHome />
          <Link to="/">Home</Link>
        </li>
        <li className="nb-1">
          <FaUser />
          <Link to="/about">About</Link>
        </li>
        <li className="nb-1">
          <FaWindows />
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="nb-1">
          <MdOutlineMiscellaneousServices />
          <Link to="/services">Services</Link>
        </li>
        <li className="nb-1">
          <RiMoneyPoundCircleFill />
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="nb-1">
          <MdReviews />
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="nb-1">
          <FaEnvelope />
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <i className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin name="lklas" className="linkedin" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook className="facebook" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank">
          <FaWhatsapp className="whatsapp" />
        </a>
        <a href="https://www.github.com/" target="_blank">
          <FaGithub className="github" />
        </a>
      </i>

      <footer>
        <p class="copy-right">© 2022, Created by </p>
        <img src={logo} alt="small-logo" className="small-logo" />
      </footer>
    </nav>
  )
}

export default Navbar

