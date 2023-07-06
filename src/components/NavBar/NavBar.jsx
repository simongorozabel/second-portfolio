import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="link" to={"/"}>
        <h1 className="logoName">SIMON GOROZABEL</h1>
      </Link>
      <ul className="moreInfo">
        <Link className="link" to={"/portfolio"}>
          <li>Portfolio</li>
        </Link>
        <Link className="link" to={"/about"}>
          <li>About</li>
        </Link>
        <Link className="link" to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      <button className="burguer">⬜</button>
    </nav>
  );
};

export default NavBar;
