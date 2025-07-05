import styles from "../../assets/styles/nabongo-ttc/NavigationBar.module.css"
import logo from "../../assets/images/example.jpg";

function NavigationBar() {
    return (
        <nav id="main-navigation" className={styles.main_navigation}>
            <div className={styles.nav_brand}>
                <img className={styles.nav_logo} src={logo} alt="Company Logo" />
                <span className={styles.nav_brand_name}>Company Name</span>
            </div>

            <ul className={styles.nav_links}>
                <li className={styles.nav_link_item}>Home</li>
                <li className={styles.nav_link_item}>Programs</li>
                <li className={styles.nav_link_item}>Student Life</li>
                <li className={styles.nav_link_item}>Team</li>
            </ul>

            <div className={styles.nav_cta}>
                <button className={styles.nav_contact_btn}>Contact Us</button>
            </div>
        </nav>
    );
}

export default NavigationBar;
