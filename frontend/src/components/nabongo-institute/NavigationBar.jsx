import styles from "../../assets/styles/nabongo-institute/NavigationBar.module.css";
import logo from "../../assets/images/nabongo.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUniversity,
  faUsers,
  faBars,
  faTimes,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function NavigationBar() {
  // For toggling mobile nav menu
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: faHome },
    { href: "#institutes", label: "Institutes", icon: faUniversity },
    { href: "#faq", label: "FAQ", icon: faQuestionCircle },
  ];

  return (
    <nav className={styles.navigation} aria-label="Main Navigation">
      {/* Brand Logo and Name */}
      <Link to="/" className={styles.nav_logo_link}>
        <div className={styles.nav_brand}>
          <img className={styles.nav_logo} src={logo} alt="Company Logo" />
          <span className={styles.nav_brand_name}>Nabongo</span>
        </div>
      </Link>


      {/* Desktop Navigation Links */}
      <ul className={`${styles.nav_links} ${menuOpen ? styles.show : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.nav_link}>
            <a
              href={item.href}
              className={styles.nav_link_item}
              onClick={() => setMenuOpen(false)} // close on click
            >
              <FontAwesomeIcon icon={item.icon} className={styles.nav_icon} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>




    </nav>
  );
}

export default NavigationBar;
