import "./Portfolio.css";
import { Link } from "react-router-dom";
import webPortfolio from ".";

const Portfolio = () => {
  //Divide into more commponents, like nesting a red...
  return (
    <section className="section__portfolio">
      {webPortfolio.map((portfolio) => (
        <article key={portfolio.id} className="article__portfolio">
          <header className="header__portfolio">
            <Link
              target="_blank"
              to={portfolio.liveLink}
              className="live_btn link"
            >
              <div className="green__btn"></div>
              <h3 className="h3__btn">Live</h3>
            </Link>
            <ul className="ul__portfolio">
              {portfolio.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </header>

          <aside>
            {portfolio.images.map((img) => (
              <figure key={img}>
                <img src={img} alt={portfolio.title} />
              </figure>
            ))}
          </aside>

          <aside
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <h2>{portfolio.title}</h2>

            <p>{portfolio.description}</p>
          </aside>

          <aside>
            <Link
              target="_blank"
              to={portfolio.gitHub}
              className="link code__btn"
            >
              <div className="red__btn"></div>
              <h3>Code</h3>
            </Link>

            <p style={{ textAlign: "center" }}>
              See the{" "}
              <Link
                target="_blank"
                to={portfolio.gitHub}
                className="link github__link"
              >
                github
              </Link>{" "}
              repository. Or the{" "}
              <Link
                target="_blank"
                to={portfolio.liveLink}
                className="link deploy__link"
              >
                deploy
              </Link>
              .
            </p>

            <Link
              target="_blank"
              to={portfolio.liveLink}
              className="link live2__btn"
            >
              <div className="green2__btn"></div>
              <h3>Deploy</h3>
            </Link>
          </aside>
        </article>
      ))}
    </section>
  );
};

export default Portfolio;
