import styles from "../../assets/styles/nabongo-ttc/Programs.module.css";

function Programs() {
  const programsData = [
    {
      title: "Early Childhood Education",
      description: "Foundational teaching for young learners to foster growth and learning habits.",
      attachment: "Curriculum Guide.pdf",
    },
    {
      title: "Primary Teacher Education",
      description: "Focused training for primary school educators in pedagogy and curriculum.",
      attachment: "2025 Program Overview.docx",
    },
    {
      title: "Diploma in Special Needs Education",
      description: "Equips teachers with skills to support learners with diverse educational needs.",
      attachment: "Special Needs Kit.zip",
    },
    {
      title: "ICT Integration in Education",
      description: "Modern approaches to teaching using digital tools and blended learning.",
      attachment: "ICT Handbook.pdf",
    },
    {
      title: "Guidance & Counseling",
      description: "Training on mentoring, student support, and emotional intelligence.",
      attachment: "Counseling Tools.pptx",
    },
    {
      title: "Adult Education & Literacy",
      description: "Empowering adult learners with basic reading, writing, and numeracy skills.",
      attachment: "Literacy Workbook.epub",
    },
  ];

  return (
    <section className={styles.programs_section}>
      <h2 className={styles.programs_title}>Discover programs built for your success</h2>

      <div className={styles.programs_grid}>
        {programsData.map((program, index) => (
          <div key={index} className={styles.program_card}>
            <button
              className={styles.program_action_btn}
              aria-label={`Open details for ${program.title}`}
            >
                <i>yts</i>
            </button>

            <div className={styles.program_details}>
              <h3 className={styles.program_name}>{program.title}</h3>
              <p className={styles.program_description}>{program.description}</p>
              <p className={styles.program_attachment}>{program.attachment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
