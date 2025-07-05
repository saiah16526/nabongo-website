import logo from "../../assets/images/example.jpg";
import "../../assets/styles/nabongo-institute/HeroSection.css";

const heroImages = [
  { id: 1, alt: "Visual 1", src: logo },
  { id: 2, alt: "Visual 2", src: logo },
  { id: 3, alt: "Visual 3", src: logo },
];

function HeroSection() {
  return (
    <section id="hero">
      {/* Left Content Area */}
      <article className="hero__content">
        <div className="hero__section-label">Home</div>
        <h1 className="hero__title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
        </h1>
        <p className="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur sunt,
          dolores voluptates neque optio expedita ut consequuntur possimus natus quo, aliquid
          quidem illum numquam nemo magnam officiis minima sit.
        </p>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <button className="btn btn--primary">
            Get started today
            <span className="btn__icon" />
          </button>
          <button className="btn btn--secondary">How it works</button>
        </div>
      </article>

      {/* Right Visual Area */}
      <div className="hero__images">
        {heroImages.map(({ id, alt, src }) => (
          <img key={id} src={src} alt={alt} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
