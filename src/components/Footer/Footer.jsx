import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="link">GitHub</Link>
      <Link className="link">LinkedIn</Link>
      <Link className="link">Instagram</Link>
    </footer>
  );
};

export default Footer;
