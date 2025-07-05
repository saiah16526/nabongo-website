import logo from "../../assets/images/example.jpg";
import styles from "../../assets/styles/nabongo-institute/HeroSection.module.css";

const heroImages = [
  { id: 1, alt: "Visual 1", src: logo },
  { id: 2, alt: "Visual 2", src: logo },
  { id: 3, alt: "Visual 3", src: logo },
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Left Content Area */}
      <article className={styles.hero__content}>
        <div className={styles.hero__section_label}>Home</div>
        <h1 className={styles.hero__title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
        </h1>
        <p className={styles.hero__description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur sunt,
          dolores voluptates neque optio expedita ut consequuntur possimus natus quo, aliquid
          quidem illum numquam nemo magnam officiis minima sit.
        </p>

        {/* CTA Buttons */}
        <div className={styles.hero__actions}>
          <button className={`${styles.hero__btn} ${styles.hero__btn_primary}`}>
            Get started today
            <span className={styles.hero__btn_icon} />
          </button>
          <button className={`${styles.hero__btn} ${styles.hero__btn_secondary}`}>
            How it works
          </button>
        </div>
      </article>

      {/* Right Visual Area */}
      <div className={styles.hero__images}>
        {heroImages.map(({ id, alt, src }) => (
          <img key={id} src={src} alt={alt} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
