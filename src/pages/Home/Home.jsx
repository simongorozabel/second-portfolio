import web1 from "../../assets/imgs/web1.png";
import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <>
      <section>
        <header className="header">
          <div className="header__full">
            <h2>Now, Empower your Business.</h2>
            <h3>Approved Value.</h3>

            <Link to={"/contact"} className="neon-button">
              Get in touch
            </Link>
          </div>

          <img src={web1} alt="lll" />
        </header>
      </section>
    </>
  );
};

export default Home;
