import "../../assets/styles/nabongo-institute/Institutes.css";
import logo from "../../assets/images/example.jpg";

const cards = [
  {
    id: 1,
    alt: "Institution 1",
    subtitle: "sub-title",
    title: "title",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, tenetur non tempora e",
  },
  {
    id: 2,
    alt: "Institution 2",
    subtitle: "sub-title",
    title: "title",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, accusantium veniam...",
  },
  {
    id: 3,
    alt: "Institution 3",
    subtitle: "sub-title",
    title: "title",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quasi quibusdam...",
  },
];

function Institute() {
  return (
    <section id="institute">
      <div className="institute__section-label">Institutions</div>
      <h2 className="institute__heading">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
      </h2>
      <p className="institute__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur sunt, dolores voluptates
        neque optio expedita ut consequuntur possimus natus quo, aliquid quidem illum numquam nemo magnam
        officiis minima sit.
      </p>

      <div className="institute__card-box">
        {cards.map(({ id, alt, subtitle, title, text }) => (
          <div className="institute__card" key={id}>
            <img src={logo} alt={alt} className="institute__image" />
            <div className="institute__sub-title">{subtitle}</div>
            <div className="institute__title">{title}</div>
            <p className="institute__text">{text}</p>
            <button className="institute__button">link</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Institute;
