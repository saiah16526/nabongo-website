import styles from "../../assets/styles/nabongo-ttc/Associations.module.css";

function Associations() {
  return (
    <section className={styles.associations_section}>
      <div className={styles.associations_header}>
        <h2 className={styles.associations_title}>Our Associations</h2>
        <p className={styles.associations_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>

      <div className={styles.associations_list}>
        <div className={`${styles.association_card}`}>
          <i className={`${styles.association_icon}`}></i>
          <span className={`${styles.association_name}`}>Association One</span>
        </div>

        <div className={styles.association_card}>
          <i className={styles.association_icon}></i>
          <span className={styles.association_name}>Association Two</span>
        </div>

        <div className={styles.association_card}>
          <i className={styles.association_icon}></i>
          <span className={styles.association_name}>Association Three</span>
        </div>
      </div>
    </section>
  );
}

export default Associations;
