import styles from "../../assets/styles/nabongo-ttc/Associations.module.css";

const associations = [
  "Teachers Service Commission (TSC)",
  "Ministry of Education Kenya",
  "Kenya Institute of Curriculum Development (KICD)",
  "Kenya National Examinations Council (KNEC)",
];

function Associations() {
  return (
    <section className={styles.associations_section} aria-labelledby="associations-title">
      <header className={styles.associations_header}>
        <h2 id="associations-title" className={styles.associations_title}>
          Our Associations
        </h2>
        <p className={styles.associations_description}>
          Nabongo TTC collaborates with national education bodies and community-focused organizations
          to enhance teacher training and professional development across Kenya.
        </p>
      </header>

      <ul className={styles.associations_list}>
        {associations.map((name, index) => (
          <li key={index} className={styles.association_card}>
            <i className={styles.association_icon} aria-hidden="true"></i>
            <span className={styles.association_name}>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Associations;
