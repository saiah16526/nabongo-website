import styles from "../../assets/styles/nabongo-institute/Institutes.module.css";
import logo from "../../assets/images/example.jpg";

const cards = [
  {
    id: 1,
    alt: "Institution 1",
    subtitle: "sub-title",
    title: "title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, tenetur non tempora e",
  },
  {
    id: 2,
    alt: "Institution 2",
    subtitle: "sub-title",
    title: "title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, accusantium veniam...",
  },
  {
    id: 3,
    alt: "Institution 3",
    subtitle: "sub-title",
    title: "title",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quasi quibusdam...",
  },
];

function Institute() {
  return (
    <section className={styles.institute}>
      <div className={styles.institute__section_label}>Institutions</div>
      <h2 className={styles.institute__heading}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
      </h2>
      <p className={styles.institute__description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur sunt, dolores voluptates
        neque optio expedita ut consequuntur possimus natus quo, aliquid quidem illum numquam nemo magnam
        officiis minima sit.
      </p>

      <div className={styles.institute__card_box}>
        {cards.map(({ id, alt, subtitle, title, text }) => (
          <div className={styles.institute__card} key={id}>
            <img src={logo} alt={alt} className={styles.institute__image} />
            <div className={styles.institute__sub_title}>{subtitle}</div>
            <div className={styles.institute__title}>{title}</div>
            <p className={styles.institute__text}>{text}</p>
            <button className={styles.institute__button}>link</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Institute;
