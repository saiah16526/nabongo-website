import styles from "../../assets/styles/nabongo-institute/NavigationBar.module.css";
import logo from "../../assets/images/example.jpg";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,        // Home
  faSchool,       // Student Life
  faUserTie,      // Team
  faEnvelope,     // Contact
} from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
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

      {/* Contact CTA */}
      <div className={styles.nav_cta}>
        <a href="#contact" className={styles.nav_contact_btn}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.nav_icon} />
          <span>Contact Us</span>
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
