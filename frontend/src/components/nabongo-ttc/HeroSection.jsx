import styles from "../../assets/styles/nabongo-ttc/HeroSection.module.css";



function HeroSection() {
  return (
    <section className={styles.hero_section} aria-labelledby="hero-title">
      {/* Subheading */}
      <p className={styles.hero_subtitle}>Nabongo Teachers' Training College</p>

      {/* Main Hero Title */}
      <h1 id="hero-title" className={styles.hero_title}>
        Building Competent and Compassionate Educators
      </h1>

      {/* Action Buttons */}
      <div className={styles.hero_actions}>
        <a href="#programs" className={`${styles.hero_btn} ${styles.btn}`}>
          Explore Diploma Programs
        </a>
        <a href="#admissions" className={`${styles.hero_btn} ${styles.btn}`}>
          Start Your Application
        </a>
      </div>

      {/* Highlights */}
      <div className={styles.hero_highlights} aria-label="TTC Highlights">
        <div className={styles.highlight_box}>
          <div className={styles.highlight_value}>800+</div>
          <p className={styles.highlight_text}>Active Trainees in DTE Programs</p>
        </div>

        <div className={styles.highlight_box}>
          <div className={styles.highlight_value}>200+</div>
          <p className={styles.highlight_text}>Experienced Trainers Nationwide</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
