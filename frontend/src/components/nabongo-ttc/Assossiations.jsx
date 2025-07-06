import styles from "../../assets/styles/nabongo-ttc/Associations.module.css";

function Associations() {
  return (
    <section className={styles.associations_section} aria-labelledby="associations-title">
      {/* Section Heading */}
      <header className={styles.associations_header}>
        <h2 id="associations-title" className={styles.associations_title}>Our Associations</h2>
        <p className={styles.associations_description}>
          Nabongo TTC collaborates with national education bodies and community-focused organizations
          to enhance teacher training and professional development across Kenya.
        </p>
      </header>

      {/* Associations List */}
      <ul className={styles.associations_list} role="list">
        <li className={styles.association_card}>
          <i className={styles.association_icon} aria-hidden="true"></i>
          <span className={styles.association_name}>Teachers Service Commission (TSC)</span>
        </li>

        <li className={styles.association_card}>
          <i className={styles.association_icon} aria-hidden="true"></i>
          <span className={styles.association_name}>Ministry of Education Kenya</span>
        </li>

        <li className={styles.association_card}>
          <i className={styles.association_icon} aria-hidden="true"></i>
          <span className={styles.association_name}>Kenya Institute of Curriculum Development (KICD)</span>
        </li>

        <li className={styles.association_card}>
          <i className={styles.association_icon} aria-hidden="true"></i>
          <span className={styles.association_name}>Kenya National Examinations Council (KNEC)</span>
        </li>
      </ul>
    </section>
  );
}

export default Associations;
