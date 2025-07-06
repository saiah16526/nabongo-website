import NavigationBar from "../components/nabongo-jr/NavigationBar"
import HeroSection from "../components/nabongo-jr/HeroSection"
import StudentLife from "../components/nabongo-jr/StudentLife"
import Team from "../components/nabongo-jr/Team"
import ContactUs from "../components/nabongo-jr/ContactUs"

function NabongoJr() {
  return (
    <>
      <NavigationBar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="student-life">
        <StudentLife />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="contact">
        <ContactUs/>
      </section>
    </>
  );
}


export default NabongoJr