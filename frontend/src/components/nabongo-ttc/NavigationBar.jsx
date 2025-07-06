import styles from "../../assets/styles/nabongo-institute/NavigationBar.module.css";
import logo from "../../assets/images/example.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,            // Better than faHome (modern home icon)
  faBookOpen,         // For "Programs"
  faSchool,           // For "Student Life"
  faUserTie,          // For "Team"
  faEnvelope,         // For "Contact"
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";


import { useState } from "react";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

const navItems = [
  { href: "#home", label: "Home", icon: faHouse },
  { href: "#programs", label: "Programs", icon: faBookOpen },
  { href: "#student-life", label: "Student Life", icon: faSchool },
  { href: "#team", label: "Team", icon: faUserTie },
];


  return (
    <nav id="main-navigation" className={styles.main_navigation} aria-label="Primary Navigation">
      {/* Logo & Name */}
      <Link to="/" className={styles.nav_logo_link}>
  <div className={styles.nav_brand}>
    <img className={styles.nav_logo} src={logo} alt="Company Logo" />
    <span className={styles.nav_brand_name}>Nabongo</span>
  </div>
</Link>


      {/* Navigation Links */}
      <ul className={`${styles.nav_links} ${menuOpen ? styles.show : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.nav_link_item}>
            <a
              href={item.href}
              className={styles.nav_link}
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              <FontAwesomeIcon icon={item.icon} className={styles.nav_icon} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* CTA + Toggle Button */}
      {/* Hamburger Toggle Button */}
            <div className={styles.nav_action}>
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className={styles.menu_toggle_btn}
                aria-label="Toggle mobile menu"
                role="button"
                tabIndex="0"
                onClick={() => setMenuOpen((prev) => !prev)}
              />
            </div>
    </nav>
  );
}

export default NavigationBar;
