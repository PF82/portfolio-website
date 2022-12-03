import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/pf.jpg"
import photo from "../assets/photo.jpg"

import styles from './navbar.module.css'

import { FaHome, FaUser, FaWindows, FaEnvelope, FaWhatsapp, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
// import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <section className={styles.section}>
        <img src={logo} alt="Logo" className={styles.logo} title="Company Logo" />
        <img src={photo} alt="Photo" className={styles.photo} title="Photo" />

        <ul className={styles.ul}>
          <li className={styles.li}>
            <FaHome className={styles.home} />
            <Link to="/">Home</Link>
          </li>
          <li className={styles.li}>
            <FaUser className={styles.about} />
            <Link to="/about">About</Link>
          </li>
          <li className={styles.li}>
            <FaWindows className={styles.portfolio} />
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={styles.li}>
            <MdOutlineMiscellaneousServices className={styles.services} />
            <Link to="/services">Services</Link>
          </li>
          {/* <li className={styles.li}>
          <RiMoneyPoundCircleFill className={styles.pricing} />
          <Link to="/pricing">Pricing</Link>
        </li> */}
          <li className={styles.li}>
            <MdReviews className={styles.reviews} />
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className={styles.li}>
            <FaEnvelope className={styles.contact} />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <i className={styles.i}>
          <a href="https://www.linkedin.com/" title="LinkedIn" target="_blank">
            <FaLinkedin name="lklas" className={styles.linkedin} />
          </a>
          {/* <a href="https://www.facebook.com/" title="Facebook" target="_blank">
          <FaFacebook className={styles.facebook} />
        </a> */}
          <a href="https://www.github.com/" title="GitHub" target="_blank">
            <FaGithub className={styles.github} />
          </a>
          <a href="https://www.whatsapp.com/" title="WhatsApp" target="_blank">
            <FaWhatsapp className={styles.whatsapp} />
          </a>
        </i>

        <footer>
          <p className="copy-right">© 2022, Powered by </p>
          <a href="https://www.pedro-fernandes.co.uk/" title="Company Logo" target="_blank">
            <img src={logo} alt="small-logo" className={styles.smallLogo} />
          </a>
        </footer>
      </section>
    </nav>
  )
}

export default Navbar

