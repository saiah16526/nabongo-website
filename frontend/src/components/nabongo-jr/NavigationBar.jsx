import React, { useState } from "react";
import styles from "../../assets/styles/nabongo-institute/NavigationBar.module.css";
import logo from "../../assets/images/nabongo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSchool,
  faUserTie,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="main-navigation" className={styles.main_navigation} aria-label="Main Navigation">
      {/* Brand Section */}
      <Link to="/" className={styles.nav_logo_link}>
        <div className={styles.nav_brand}>
          <img className={styles.nav_logo} src={logo} alt="Company Logo" />
          <span className={styles.nav_brand_name}>Nabongo</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className={styles.nav_links}>
        <li className={styles.nav_link_item}>
          <a href="#home" className={styles.nav_link}>
            <FontAwesomeIcon icon={faHouse} className={styles.nav_icon} />
            <span>Home</span>
          </a>
        </li>
        <li className={styles.nav_link_item}>
          <a href="#student-life" className={styles.nav_link}>
            <FontAwesomeIcon icon={faSchool} className={styles.nav_icon} />
            <span>Student Life</span>
          </a>
        </li>
        <li className={styles.nav_link_item}>
          <a href="#team" className={styles.nav_link}>
            <FontAwesomeIcon icon={faUserTie} className={styles.nav_icon} />
            <span>Team</span>
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default NavigationBar;
