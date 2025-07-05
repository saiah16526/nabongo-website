import styles from "../../assets/styles/nabongo-ttc/HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      {/* Subheading */}
      <span className={styles.hero_subtitle}>Your Subtitle</span>

      {/* Main Hero Title */}
      <span className={styles.hero_title}>Welcome to Our Platform</span>

      {/* Action Buttons */}
      <div className={styles.hero_actions}>
        <button className={`${styles.hero_btn} ${styles.btn}`}>Get Started</button>
        <button className={`${styles.hero_btn} ${styles.btn}`}>Learn More</button>
      </div>

      {/* Highlights / Statistics */}
      <div className={styles.hero_highlights}>
        <div className={styles.highlight_box}>
          <div className={styles.highlight_value}>6M+</div>
          <p className={styles.highlight_text}>Users Worldwide</p>
        </div>

        <div className={styles.highlight_box}>
          <div className={styles.highlight_value}>6M+</div>
          <p className={styles.highlight_text}>Projects Completed</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
