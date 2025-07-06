import styles from "../../assets/styles/nabongo-ttc/Team.module.css";
import logo from "../../assets/images/example.jpg";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Principal",
    photo: logo,
  },
  {
    name: "Michael Kimani",
    role: "Vice Principal",
    photo: logo,
  },
  {
    name: "Sarah Wanjiku",
    role: "Head of Admissions",
    photo: logo,
  },
];

function Team() {
  return (
    <section className={styles.team_section} aria-labelledby="team-title">
      <header>
        <h2 id="team-title" className={styles.team_title}>Our Team</h2>
        <p className={styles.team_intro}>
          At Nabongo Teachers Training College, our leadership team is dedicated to shaping the next generation of educators through integrity, innovation, and commitment to academic excellence.
        </p>
      </header>

      <ul className={styles.team_members} role="list">
        {teamMembers.map((member, index) => (
          <li key={index} className={styles.team_member_card}>
            <img
              className={styles.member_photo}
              src={member.photo}
              alt={`Portrait of ${member.name}`}
            />
            <div className={styles.member_info}>
              <h3 className={styles.member_name}>{member.name}</h3>
              <p className={styles.member_role}>{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Team;
