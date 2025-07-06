import logo from "../../assets/images/example.jpg";
import styles from "../../assets/styles/nabongo-institute/HeroSection.module.css";

const heroImages = [
  { id: 1, alt: "Students collaborating", src: logo },
  { id: 2, alt: "Modern campus building", src: logo },
  { id: 3, alt: "Interactive learning environment", src: logo },
];

function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Left Content Area */}
      <article className={styles.hero__content}>
        <p className={styles.hero__section_label}>Home</p>

        <h1 id="hero-title" className={styles.hero__title}>
          Empowering the Next Generation of Leaders Through World-Class Education
        </h1>

        <p className={styles.hero__description}>
          Nabongo connects learners to leading institutions and expert mentors, delivering transformative
          education experiences that prepare you for the careers of tomorrow. Learn from the best, grow your potential,
          and shape the future.
        </p>
      </article>

      {/* Right Visual Area */}
      <div className={styles.hero__images} role="presentation" aria-hidden="true">
        {heroImages.map(({ id, alt, src }) => (
          <img key={id} src={src} alt={alt} className={styles.hero__image} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
