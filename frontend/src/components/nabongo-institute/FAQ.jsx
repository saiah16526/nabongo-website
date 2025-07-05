import styles from "../../assets/styles/nabongo-institute/FAQ.module.css";

const faqItems = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: false,
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: true,
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: false,
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: false,
  },
];

function FAQ() {
  return (
    <section className={styles.faq}>
      {/* Section Title */}
      <div className={styles.faq__section_label}>Frequently Asked Questions</div>

      {/* Intro Text */}
      <div className={styles.faq__intro}>
        <div className={styles.faq__heading}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </div>
        <p className={styles.faq__description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur sunt,
          dolores voluptates neque optio expedita ut consequuntur possimus natus quo, aliquid
          quidem illum numquam nemo magnam officiis minima sit.
        </p>
      </div>

      {/* FAQ Items */}
      <div className={styles.faq__wrapper}>
        {faqItems.map(({ id, question, answer, active }) => (
          <div
            key={id}
            className={`${styles.faq__item} ${active ? styles.faq__item_active : ""}`}
          >
            <div className={styles.faq__question}>{question}</div>
            <p className={styles.faq__answer}>{answer}</p>
            <button className={styles.faq__toggle}>e</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
