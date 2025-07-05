import styles from "../../assets/styles/nabongo-institute/NavigationBar.module.css";
import logo from "../../assets/images/example.jpg";

function NavigationBar() {
  return (
    <nav className={styles.navigation}>
      {/* Brand Logo and Name */}
      <div className={styles.nav_brand}>
        <img className={styles.nav_logo} src={logo} alt="Company Logo" />
        <div className={styles.nav_brand_name}>Company Name</div>
      </div>

      {/* Primary Navigation Links */}
      <ul className={styles.nav_links}>
        <li className={styles.nav_link}><img src={logo} alt="" /> Home</li>
        <li className={styles.nav_link}><img src={logo} alt="" /> Institutes</li>
        <li className={styles.nav_link}><img src={logo} alt="" /> Community</li>
      </ul>

      {/* Navigation Utility Button */}
      <div className={styles.nav_action}>
        <button className={styles.menu_toggle_btn}></button>
      </div>
    </nav>
  );
}

export default NavigationBar;
