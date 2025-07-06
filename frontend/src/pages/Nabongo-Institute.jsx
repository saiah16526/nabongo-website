import NavigationBar from "../components/nabongo-institute/NavigationBar";
import HeroSection from "../components/nabongo-institute/HeroSection";
import FAQ from "../components/nabongo-institute/FAQ";
import Institute from "../components/nabongo-institute/Institutes";
import Footer from "../components/nabongo-institute/Footer"

import "../assets/styles/global.css";

function NabongoInstitute() {
  return (
    <>
      <NavigationBar />

      {/* 👇 ID for "Home" anchor link */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 👇 ID for "Institutes" anchor link */}
      <section id="institutes">
        <Institute />
      </section>

      {/* 👇 ID for "Community" anchor link */}
      <section id="faq">
        <FAQ />
      </section>

      <Footer/>
    </>
  );
}

export default NabongoInstitute;
