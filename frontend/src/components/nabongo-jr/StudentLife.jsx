import styles from "../../assets/styles/nabongo-jr/StudentLife.module.css";
import image1 from "../../assets/images/example.jpg"; // Replace with real images
import image2 from "../../assets/images/example.jpg";

function StudentLife() {
  return (
    <section className={styles.student_life_section} aria-labelledby="student-life-heading">
      {/* Top Section */}
      <div className={styles.top_section}>
        <div className={styles.top_content}>
          <header>
            <h2 id="student-life-heading" className={styles.top_title}>Campus Life at Nabongo Jr Academy</h2>
          </header>

          <p className={styles.top_description}>
            At Nabongo Jr Academy, student life goes beyond academics. Our learners thrive in an environment that nurtures curiosity, character, and community. From vibrant cultural events to academic clubs and mentorship circles, we foster holistic growth.
          </p>

          {/* Statistics */}
          <dl className={styles.stats_wrapper}>
            <div className={styles.stat_box}>
              <dt className={styles.stat_value}>95%</dt>
              <dd className={styles.stat_label}>Student Satisfaction</dd>
            </div>
            <div className={styles.stat_box}>
              <dt className={styles.stat_value}>88%</dt>
              <dd className={styles.stat_label}>Active in Clubs</dd>
            </div>
            <div className={styles.stat_box}>
              <dt className={styles.stat_value}>80%</dt>
              <dd className={styles.stat_label}>Community Outreach</dd>
            </div>
          </dl>
        </div>

        <div className={styles.image_wrapper}>
          <img className={styles.top_image} src={image1} alt="Students enjoying activities" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom_section}>
        <div className={styles.image_wrapper}>
          <img className={styles.bottom_image} src={image2} alt="Student interaction at Nabongo Jr" />
        </div>

        <div className={styles.bottom_content}>
          <h3 className={styles.bottom_title}>Opportunities Beyond the Classroom</h3>
          <p className={styles.bottom_description}>
            Students are encouraged to explore their passions and talents through structured co-curricular activities, competitions, and leadership initiatives.
          </p>

          <article className={styles.subsection}>
            <h4 className={styles.subsection_title}>Leadership & Mentorship</h4>
            <p className={styles.subsection_description}>
              Junior leaders work alongside mentors and staff to plan events, guide peers, and build a culture of responsibility and excellence.
            </p>
          </article>

          <article className={styles.subsection}>
            <h4 className={styles.subsection_title}>Creative & Cultural Programs</h4>
            <p className={styles.subsection_description}>
              From music and drama to art exhibitions, our creative spaces give students the freedom to express themselves and celebrate diversity.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
