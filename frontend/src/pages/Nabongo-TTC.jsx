import NavigationBar from "../components/nabongo-ttc/NavigationBar";
import HeroSection from "../components/nabongo-ttc/HeroSection";
import Assossiations from "../components/nabongo-ttc/Assossiations";
import Programs from "../components/nabongo-ttc/Programs";
import StudentLife from "../components/nabongo-ttc/StudentLife";
import Team from "../components/nabongo-ttc/Team";
import ContactUs from "../components/nabongo-ttc/ContactUs";
import "../assets/styles/global.css";

function NabongoTTC() {
  return (
    <>
      <NavigationBar />

      {/* Each section needs an id to scroll to */}
      <section id="home">
        <HeroSection />
      </section>

      <section>
        <Assossiations />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <section id="student-life">
        <StudentLife />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}

export default NabongoTTC;
