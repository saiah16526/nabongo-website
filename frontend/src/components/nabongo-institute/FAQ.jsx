import "../../assets/styles/nabongo-institute/FAQ.css";

const faqItems = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: false,
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: true,
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: false,
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora illum",
    active: false,
  },
];

function FAQ() {
  return (
    <section id="faq">
      {/* Section Title */}
      <div className="faq__section-label">Frequently Asked Questions</div>

      {/* Intro Text */}
      <div className="faq__intro">
        <div className="faq__heading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </div>
        <p className="faq__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur sunt,
          dolores voluptates neque optio expedita ut consequuntur possimus natus quo, aliquid
          quidem illum numquam nemo magnam officiis minima sit.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="faq__wrapper">
        {faqItems.map(({ id, question, answer, active }) => (
          <div
            key={id}
            className={`faq__item${active ? " faq__item--active" : ""}`}
          >
            <div className="faq__question">{question}</div>
            <p className="faq__answer">{answer}</p>
            <button className="faq__toggle">e</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
