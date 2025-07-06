import { useEffect, useRef } from "react";
import styles from "../../assets/styles/nabongo-institute/FAQ.module.css";

const faqItems = [
  {
    id: 1,
    question: "Who founded Nabongo Colleges and Schools?",
    answer: "Nabongo Colleges and Schools was founded by a team of education professionals dedicated to providing quality, holistic education in Kenya. It has grown steadily since 2007.",
  },
  {
    id: 2,
    question: "How can I contact you?",
    answer: "You can reach us via phone at 0711574423 or 0704366140, by email at info@nabongocollegesandschools.ac.ke, or through the contact form on our website.",
  },
  {
    id: 3,
    question: "Are you accredited?",
    answer: "Yes, Nabongo Teachers' Training College is fully accredited by the Ministry of Education under registration number 39P40000011.",
  },
  {
    id: 4,
    question: "What levels of education do you offer?",
    answer: "We offer education from pre-primary to junior and senior secondary, as well as diploma-level teacher and technical training programs.",
  },
];


function FAQ() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((ref) => {
      if (!ref) return;
      const toggleHandler = () => {
        if (ref.open) {
          ref.classList.add(styles.faq__item_active);
        } else {
          ref.classList.remove(styles.faq__item_active);
        }
      };
      ref.addEventListener("toggle", toggleHandler);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) ref.removeEventListener("toggle", () => {});
      });
    };
  }, []);

  return (
    <section className={styles.faq} aria-labelledby="faq-heading">
      <header>
        <p className={styles.faq__section_label}>Frequently Asked Questions</p>
        <div className={styles.flex}>
          <h2 id="faq-heading" className={styles.faq__heading}>
            Your Questions Answered
          </h2>
          <p className={styles.faq__description}>
            Explore common questions about Nabongo and how it works.
          </p>
        </div>
      </header>

      <div className={styles.faq__wrapper}>
        {faqItems.map(({ id, question, answer }, index) => (
          <details
            key={id}
            ref={(el) => (refs.current[index] = el)}
            className={styles.faq__item}
          >
            <summary className={styles.faq__question}>{question}</summary>
            <div className={styles.faq__answer}>{answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
