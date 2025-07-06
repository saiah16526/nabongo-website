import { useEffect, useRef } from "react";
import styles from "../../assets/styles/nabongo-institute/FAQ.module.css";

const faqItems = [
  {
    id: 1,
    question: "What is Nabongo?",
    answer: "Nabongo is an educational platform focusing on ...",
  },
  {
    id: 2,
    question: "How do I register?",
    answer: "Click the 'Register' button on the top right and follow the steps.",
  },
  {
    id: 3,
    question: "Are there any free courses?",
    answer: "Yes! We offer a range of free foundational courses to get started.",
  },
  {
    id: 4,
    question: "How can I contact support?",
    answer: "You can contact us via the 'Support' page accessible in the footer.",
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
