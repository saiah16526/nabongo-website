import styles from "../../assets/styles/nabongo-ttc/Programs.module.css";

function Programs() {
  const programsData = [
    {
      title: "Diploma in Early Childhood Teacher Education (Regular)",
      description:
        "Three‑year full-time diploma program for early childhood educators, KCSE C+ and P1 required.",
      attachment: "DECTE Regular Admission Form.pdf",
    },
    {
      title: "Diploma in Early Childhood Teacher Education (School‑Based)",
      description:
        "Designed for working ECDE teachers; school‑based, KCSE C+, P1 with 2 years’ service.",
      attachment: "DECTE SchoolBased Admission Form.pdf",
    },
    {
      title: "Diploma in Primary Teacher Education (Regular)",
      description:
        "Full-time three‑year diploma for primary school teaching, KCSE C plain required.",
      attachment: "DPTE Regular Admission Form.pdf",
    },
    {
      title: "Diploma in Primary Teacher Education (School‑Based)",
      description:
        "School‑based for in‑service primary teachers with KCSE C and P1 certificate.",
      attachment: "DPTE SchoolBased Admission Form.pdf",
    },
    {
      title: "Diploma in Special Needs Education (Regular)",
      description:
        "Regular three‑year diploma to train teachers for learners with diverse needs.",
      attachment: "SNE Regular Admission Form.pdf",
    },
    {
      title: "Diploma in Special Needs Education (School‑Based)",
      description:
        "School‑based SNE diploma for practising teachers with P1 qualification.",
      attachment: "SNE SchoolBased Admission Form.pdf",
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
              <a
                href={`/forms/${program.attachment}`}
                className={styles.program_attachment}
                download
                aria-label={`Download ${program.attachment}`}
              >
                📎 {program.attachment}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.programs_extra}>
        <p><strong>Entry Requirements:</strong> KCSE mean grade C (plain/C+), P1 Certificate for ECDE & SNE school-based.</p>
        <p><strong>Fee Structure (per term):</strong> Day – KSh 18,300; Boarder – KSh 29,650 (DECTE); similar scale applies to DPTE & SNE.</p>
      </div>
    </section>
  );
}

export default Programs;
