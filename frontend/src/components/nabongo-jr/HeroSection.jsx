import styles from "../../assets/styles/nabongo-jr/HeroSection.module.css";

// Import multiple logos
import logo1 from "../../assets/images/example.svg";
import logo2 from "../../assets/images/example.svg";
import logo3 from "../../assets/images/example.svg";
import logo4 from "../../assets/images/example.svg";
import logo5 from "../../assets/images/example.svg";
import logo6 from "../../assets/images/example.svg";
import logo7 from "../../assets/images/example.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const sizes = ["large"];

function HeroSection() {
  return (
    <section className={styles.hero_section} aria-label="Hero Section">
      <header className={styles.hero_header}>
        <h4 className={styles.hero_subtitle}>Empowering Education</h4>
        <h1 className={styles.hero_title}>Welcome to Nabongo Junior Academy</h1>
        <p className={styles.hero_context}>
          Join a vibrant community dedicated to excellence in teaching and learning.
        </p>
        <a href="#get-started" className={styles.hero_button}>Get Started</a>
      </header>

      {/* Partner Logos */}
      <div className={styles.hero_logos} aria-label="Partner Logos">
        <ul className={styles.logo_list}>
          {/* Duplicate list for seamless scrolling */}
          {[...Array(2)].flatMap((_, repeatIndex) =>
            logos.map((logoSrc, index) => {
              const size = sizes[Math.floor(Math.random() * sizes.length)];
              return (
                <li key={`${repeatIndex}-${index}`}>
                  <img
                    className={`${styles.logo_img} ${styles[`logo_img_${size}`]}`}
                    src={logoSrc}
                    alt={`Partner logo ${index + 1}`}
                  />
                </li>
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;
