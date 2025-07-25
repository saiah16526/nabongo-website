import { useEffect, useState } from "react";
import styles from "../../assets/styles/nabongo-ttc/StudentLife.module.css";
import logo from "../../assets/images/example.svg"; // Replace with actual images

const slides = [
  {
    title: "Extracurricular Clubs",
    description:
      "Engage beyond academics in clubs like Science, Debate, Environment, Writers', Drama, Music, and ICT.",
    remarks: "Explore your passions and grow your confidence.",
    image: logo,
    cta: "Join a Club",
  },
  {
    title: "Sports & Games",
    description:
      "Take part in football, athletics, volleyball, swimming (for pre-primary), and fun inter-school competitions.",
    remarks: "Show your strength on and off the field.",
    image: logo,
    cta: "Get Active",
  },
  {
    title: "Cultural Events & Community",
    description:
      "Experience cultural celebrations with music, dance, drama, and food that bring our community together.",
    remarks: "Celebrate diversity and unity.",
    image: logo,
    cta: "Join the Festivities",
  },
];


function StudentLife() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const { title, description, remarks, image, cta } = slides[index];

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 100);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 100);
  };

  const handleDotClick = (dotIndex) => {
    setFade(false);
    setTimeout(() => {
      setIndex(dotIndex);
      setFade(true);
    }, 100);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    setFade(true); // initial fade
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.student_life_section} aria-labelledby="student-life-title">
      <header>
        <h2 id="student-life-title" className={styles.student_life_title}>Student Life</h2>
      </header>

      {/* Slide Content */}
      <article
        className={`${styles.student_life_overview} ${fade ? styles.fade_in : ""}`}
      >
        <div className={styles.overview_content}>
          <h3 className={styles.overview_title}>{title}</h3>
          <p className={styles.overview_description}>{description}</p>
          <p className={styles.overview_remarks}>{remarks}</p>
        </div>
        <img
          className={styles.overview_image}
          src={image}
          alt={title}
        />
      </article>

      {/* CTA Buttons */}
      <div className={styles.student_life_cta}>
        <button className={styles.cta_button} onClick={handlePrev} aria-label="Previous">
          ◀ Prev
        </button>
        <button className={styles.cta_button} aria-label={`CTA for ${title}`}>
          {cta}
        </button>
        <button className={styles.cta_button} onClick={handleNext} aria-label="Next">
          Next ▶
        </button>
      </div>

      {/* Dot Navigation */}
      <div className={styles.pagination_dots}>
        {slides.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`${styles.dot} ${dotIndex === index ? styles.active : ""}`}
            onClick={() => handleDotClick(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentLife;
