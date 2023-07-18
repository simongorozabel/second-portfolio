import "./About.css";
import simon from "../../assets/imgs/simon.jpeg";
const About = () => {
  return (
    <section className="about__section">
      <header className="about__header">
        <figure>
          <img src={simon} alt="A beautiful simon" />
        </figure>

        <div>
          <h2>Who is Simon?</h2>
          <h3>Entrepreneur. Programmer.</h3>
          <h4>Athlete. Artist. Human. Designer.</h4>
        </div>
      </header>

      <article className="about__article">
        <h3>Experience</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro facilis enim expedita quibusdam necessitatibus laborum rerum,
          sunt, assumenda possimus provident officiis eligendi ad corporis
          beatae suscipit quis. Aperiam, magnam.
        </p>
      </article>

      <article className="about__article">
        <h3>Education</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro facilis enim expedita quibusdam necessitatibus laborum rerum,
          sunt, assumenda possimus provident officiis eligendi ad corporis
          beatae suscipit quis. Aperiam, magnam.
        </p>
      </article>

      <article className="about__article">
        <h3>Hobby</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          porro facilis enim expedita quibusdam necessitatibus laborum rerum,
          sunt, assumenda possimus provident officiis eligendi ad corporis
          beatae suscipit quis. Aperiam, magnam.
        </p>
      </article>
    </section>
  );
};

export default About;
