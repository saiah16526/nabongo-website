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
    <section className={styles.team_section}>
      <h2 className={styles.team_title}>Our Team</h2>
      <p className={styles.team_intro}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nostrum
        explicabo, similique facilis quod praesentium.
      </p>

      <div className={styles.team_members}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.team_member_card}>
            <img
              className={styles.member_photo}
              src={member.photo}
              alt={member.name}
            />
            <h3 className={styles.member_name}>{member.name}</h3>
            <p className={styles.member_role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
