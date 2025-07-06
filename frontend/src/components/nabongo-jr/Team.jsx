import styles from "../../assets/styles/nabongo-jr/Team.module.css";
const profileImg = "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";

<img src={profileImg} alt="Profile" />


const teamMembers = [
  {
    name: "Alice Wanjiku",
    bio: "Head of Academics",
    image: profileImg,
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Brian Otieno",
    bio: "Student Welfare",
    image: profileImg,
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Diana Njeri",
    bio: "ICT & Innovation",
    image: profileImg,
    socials: ["facebook", "twitter", "linkedin"],
  },

];

function Team() {
  return (
    <section className={styles.team_section} aria-labelledby="team-heading">
      <header>
        <h2 id="team-heading" className={styles.team_title}>Meet Our Team</h2>
        <p className={styles.team_context}>
          Our dedicated staff ensures the best environment for student growth.
        </p>
      </header>

      <ul className={styles.team_grid}>
        {teamMembers.map((member, index) => (
          <li key={index} className={styles.team_card}>
            <img
              className={styles.member_photo}
              src={member.image}
              alt={`Portrait of ${member.name}`}
            />
            <div className={styles.member_info}>
              <h3 className={styles.member_name}>{member.name}</h3>
              <p className={styles.member_bio}>{member.bio}</p>
              <div className={styles.member_socials} aria-label={`${member.name}'s social links`}>
                {member.socials.map((icon, i) => (
                  <a
                    key={i}
                    href={`https://${icon}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name}'s ${icon} profile`}
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Team;
