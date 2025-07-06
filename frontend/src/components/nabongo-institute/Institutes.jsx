// Importing styles and a placeholder image
import styles from "../../assets/styles/nabongo-institute/Institutes.module.css";
import logo from "../../assets/images/example.svg";

// 🧭 Import useNavigate hook from React Router for navigation
import { useNavigate } from "react-router-dom";

// This component renders the institute cards
function Institute() {
  // Create a navigation function instance
  const navigate = useNavigate();

  // Define the list of institutions
  const cards = [
    {
      id: 1,
      alt: "Nabongo Teachers Training College",
      subtitle: "Professional Teaching Courses",
      title: "Nabongo Teachers Training College",
      text: "Nabongo TTC trains competent teachers with a strong foundation in pedagogy, early childhood development, and education management.",
      route: "/ttc", // Navigates to the TTC page
    },
    {
      id: 2,
      alt: "Nabongo Junior Academy",
      subtitle: "Primary Education Excellence",
      title: "Nabongo Junior Academy",
      text: "Nabongo Junior Academy provides holistic education to young learners, focusing on academic growth, discipline, and moral values.",
      route: "/jr", // Navigates to the JR page
    },
    {
      id: 3,
      alt: "Nabongo Community Platform",
      subtitle: "Collaboration & Growth",
      title: "Nabongo Community Platform",
      text: "The Nabongo Community Platform brings students, educators, alumni, and partners together to collaborate, share resources, and support each other through forums, events, and mentorship.",
      route: "/", // You can change this later to the actual route (e.g. /community)
    },

  ];

  // JSX to render the institute section
  return (
    <section className={styles.institute} aria-labelledby="institutes-heading">
      <header>
        <p className={styles.institute__section_label}>Institutions</p>
        <h2 id="institutes-heading" className={styles.institute__heading}>
          Our Diverse Institutions
        </h2>
        <p className={styles.institute__description}>
          From pre-primary to teacher training, our institutions offer quality education at every level.</p>
      </header>

      <div className={styles.institute__card_box}>
        {cards.map(({ id, alt, subtitle, title, text, route }) => (
          <article key={id} className={styles.institute__card}>
            <figure>
              <img src={logo} alt={alt} className={styles.institute__image} />
            </figure>
            <div className={styles.institute__sub_title}>{subtitle}</div>
            <h3 className={styles.institute__title}>{title}</h3>
            <p className={styles.institute__text}>{text}</p>
            <button
              className={styles.institute__button}
              onClick={() => navigate(route)} // 🔁 Navigates to the selected route on click
            >
              Visit Site
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Institute;
