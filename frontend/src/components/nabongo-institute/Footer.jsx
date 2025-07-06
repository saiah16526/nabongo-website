import styles from "../../assets/styles/nabongo-institute/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Nabongo</h2>
          <p className={styles.tagline}>Empowering Education, Building Futures</p>
        </div>

        <nav className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/ttc">Nabongo-TTC</a>
          <a href="/jr">Nabongo-Jr</a>
          <a href="">Community</a>
        </nav>

        <div className={styles.contactInfo}>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +254 700 000 000
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@nabongo.ac.ke
          </p>

          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>


      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Nabongo Educational Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
