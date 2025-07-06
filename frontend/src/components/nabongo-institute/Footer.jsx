import styles from "../../assets/styles/nabongo-institute/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    icon: faFacebook,
    url: "https://www.facebook.com/NabongoCollegesandSchools",
    label: "Facebook",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/nabongo_college", // Replace if needed
    label: "Twitter",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/nabongo_colleges", // Replace if needed
    label: "Instagram",
  },
];

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
          <a href="/community">Community</a>
        </nav>

        <div className={styles.contactInfo}>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +254 711 574 423 <br/> +254 704 366 140
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@nabongocollegesandschools.ac.ke
          </p>

          <ul className={styles.social}>
            {socialLinks.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Nabongo Educational Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
