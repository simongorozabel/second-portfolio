import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="link" to={"/"}>
        <h1 className="logoName">SIMON GOROZABEL</h1>
      </Link>
      <ul className="moreInfo">
        <li>
          <Link to={"/portfolio"} className="link">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="link">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link">
            Contact
          </Link>
        </li>
      </ul>
      <button className="burguer">⬜</button>
    </nav>
  );
};

export default NavBar;
