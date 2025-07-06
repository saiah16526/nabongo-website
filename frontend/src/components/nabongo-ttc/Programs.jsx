import styles from "../../assets/styles/nabongo-ttc/Programs.module.css";

// Only available PDF forms
import DSTE_Regular from "../../assets/forms/DSTE-Regular-Admission-Letter.pdf";
import DSTE_SchoolBased from "../../assets/forms/DSTE-School-based-Admission-Form.pdf";

function Programs() {
  const programsData = [
    {
      title: "Diploma in Primary Teacher Education (DPTE) – Regular",
      description:
        "Full-time program for aspiring primary school teachers. Entry: KCSE mean grade C plain or higher.",
      attachment: null,
    },
    {
      title: "Diploma in Primary Teacher Education (DPTE) – School-Based",
      description:
        "Designed for in-service primary teachers. Entry: KCSE C plain and P1 Certificate.",
      attachment: null,
    },
    {
      title: "Diploma in Secondary Teacher Education (DSTE) – Regular",
      description:
        "Full-time program for secondary school teaching. Entry: KCSE C+ in teaching subjects.",
      attachment: DSTE_Regular,
    },
    {
      title: "Diploma in Secondary Teacher Education (DSTE) – School-Based",
      description:
        "For in-service secondary teachers. Entry: KCSE C+ and teaching experience.",
      attachment: DSTE_SchoolBased,
    },
    {
      title: "Diploma in Early Childhood Teacher Education (DECTE)",
      description:
        "For full-time early childhood educators. Entry: KCSE C+ and P1 Certificate preferred.",
      attachment: null,
    },
    {
      title: "Business & Technical Courses – Nabongo Technical College",
      description:
        "Covers business, accounting, ICT, and entrepreneurship. Entry varies by course.",
      attachment: null,
    },
  ];

  return (
    <section className={styles.programs_section} aria-labelledby="programs-heading">
      <header>
        <h2 id="programs-heading" className={styles.programs_title}>
          Our Diploma Programs
        </h2>
        <p className={styles.programs_subtitle}>
          Choose from Regular or School-Based tracks. Download the application form below.
        </p>
      </header>

      <ul className={styles.programs_grid} role="list">
        {programsData.map((program, idx) => (
          <li key={idx} className={styles.program_card}>
            <div className={styles.program_details}>
              <h3 className={styles.program_name}>{program.title}</h3>
              <p className={styles.program_description}>{program.description}</p>

              {program.attachment ? (
                <a
                  href={program.attachment}
                  className={styles.program_attachment}
                  download
                  aria-label={`Download admission form for ${program.title}`}
                >
                  📎 {program.attachment.split("/").pop()}
                </a>
              ) : (
                <p className={styles.form_missing}>
                  Admission form currently unavailable. Please contact the administration.
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.programs_extra}>
        <p>
          <strong>Entry Requirements:</strong> KCSE C (plain or higher); P1 Certificate for school-based applicants.
        </p>
        <p>
          <strong>Fee Structure (per term):</strong> Day Scholars – KSh 18,300; Boarders – KSh 29,650. Technical programs may vary.
        </p>
      </div>
    </section>
  );
}

export default Programs;
