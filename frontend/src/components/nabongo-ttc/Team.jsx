import styles from "../../assets/styles/nabongo-ttc/Team.module.css";
const profileImg = "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";
import Chief_Director from "../../assets/images/Dorothy Auma Saiah.jpg"

const teamMembers = [
  {
    name: "Dorothy Auma Saiah",
    role: "Chief Director",
    photo: Chief_Director,
  },
  {
    name: "Michael Kimani",
    role: "Vice Principal",
    photo: profileImg,
  },
  {
    name: "Sarah Wanjiku",
    role: "Head of Admissions",
    photo: profileImg,
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
