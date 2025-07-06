import styles from "../../assets/styles/nabongo-jr/StudentLife.module.css";
import image1 from "../../assets/images/example.svg"; // Replace with real images
import image2 from "../../assets/images/example.svg";

function StudentLife() {
  return (
    <section className={styles.student_life_section} aria-labelledby="student-life-heading">
      {/* Top Section */}
      <div className={styles.top_section}>
        <div className={styles.top_content}>
          <header>
            <h2 id="student-life-heading" className={styles.top_title}>
              Life at Nabongo Jr Academy – Primary School
            </h2>
          </header>

          <p className={styles.top_description}>
            At Nabongo Jr Academy Primary, we cultivate strong academic foundations while supporting every child's creativity and confidence. Our structured curriculum, caring teachers, and co-curricular opportunities ensure a well-rounded experience.
          </p>

          {/* Statistics */}
          <dl className={styles.stats_wrapper}>
            <div className={styles.stat_box}>
              <dt className={styles.stat_value}>95%</dt>
              <dd className={styles.stat_label}>Academic Excellence</dd>
            </div>
            <div className={styles.stat_box}>
              <dt className={styles.stat_value}>85%</dt>
              <dd className={styles.stat_label}>Club Participation</dd>
            </div>
            <div className={styles.stat_box}>
              <dt className={styles.stat_value}>90%</dt>
              <dd className={styles.stat_label}>Parental Involvement</dd>
            </div>
          </dl>
        </div>

        <div className={styles.image_wrapper}>
          <img className={styles.top_image} src={image1} alt="Nabongo Primary School students" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom_section}>
        <div className={styles.image_wrapper}>
          <img className={styles.bottom_image} src={image2} alt="Students learning and collaborating" />
        </div>

        <div className={styles.bottom_content}>
          <h3 className={styles.bottom_title}>Beyond the Classroom</h3>
          <p className={styles.bottom_description}>
            Our learners grow through rich academic experiences, co-curricular activities, and character-building programs that shape future leaders.
          </p>

          <article className={styles.subsection}>
            <h4 className={styles.subsection_title}>Clubs & Competitions</h4>
            <p className={styles.subsection_description}>
              Students join Science, Debate, Environment, ICT, Drama, and Music clubs, building critical thinking and creativity through participation in inter-school competitions.
            </p>
          </article>

          <article className={styles.subsection}>
            <h4 className={styles.subsection_title}>Discipline & Leadership</h4>
            <p className={styles.subsection_description}>
              Learners are guided by values and encouraged to take leadership roles as class prefects or club reps, helping to develop confidence and responsibility.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
