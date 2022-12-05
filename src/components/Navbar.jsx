import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.jpg"
import photo from "../images/photo.jpg"

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
            <FaHome className={styles.icon} />
            <Link className={styles.link} to="/">Home</Link>
          </li>
          <li className={styles.li}>
            <FaUser className={styles.icon} />
            <Link className={styles.link} to="/about">About</Link>
          </li>
          <li className={styles.li}>
            <FaWindows className={styles.icon} />
            <Link className={styles.link} to="/portfolio">Portfolio</Link>
          </li>
          <li className={styles.li}>
            <MdOutlineMiscellaneousServices className={styles.icon} />
            <Link className={styles.link} to="/services">Services</Link>
          </li>
          {/* <li className={styles.li}>
          <RiMoneyPoundCircleFill className={styles.icon} />
          <Link className={styles.link} to="/pricing">Pricing</Link>
        </li> */}
          <li className={styles.li}>
            <MdReviews className={styles.icon} />
            <Link className={styles.link} to="/reviews">Reviews</Link>
          </li>
          <li className={styles.li}>
            <FaEnvelope className={styles.icon} />
            <Link className={styles.link} to="/contact">Contact</Link>
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
          <span className="copy-right">© 2022, Powered by </span>
          <a href="https://www.pedro-fernandes.co.uk/" title="Company Logo" target="_blank">
            <img src={logo} alt="small-logo" className={styles.smallLogo} />
          </a>
        </footer>
      </section>
    </nav>
  )
}

export default Navbar

