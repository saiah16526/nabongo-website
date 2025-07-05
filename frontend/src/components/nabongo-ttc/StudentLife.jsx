import styles from "../../assets/styles/nabongo-ttc/StudentLife.module.css";
import logo from "../../assets/images/example.jpg";

function StudentLife() {
  return (
    <section className={styles.student_life_section}>
      {/* Section Title */}
      <h2 className={styles.student_life_title}>Student Life</h2>

      {/* Student Life Overview */}
      <article className={styles.student_life_overview}>
        <div className={styles.overview_content}>
          <h3 className={styles.overview_title}>Overview</h3>
          <p className={styles.overview_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed
            libero quisquam, et impedit iure consectetur iste repudiandae cum,
            ratione eaque laudantium. Velit rerum repudiandae sint quidem modi
            expedita quis!
          </p>
          <p className={styles.overview_remarks}>Closing Remarks</p>
        </div>
        <img
          className={styles.overview_image}
          src={logo}
          alt="Student Life Visual"
        />
      </article>

      {/* CTA Section */}
      <div className={styles.student_life_cta}>
        <div className={styles.cta_box}>
          <div className={styles.cta_icon}></div>
          <button className={styles.cta_button}>Involved</button>
        </div>

        <div className={styles.cta_box}>
          <div className={styles.cta_icon}></div>
          <button className={styles.cta_button}>Involved</button>
        </div>

        <div className={styles.cta_box}>
          <div className={styles.cta_icon}></div>
          <button className={styles.cta_button}>Involved</button>
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
