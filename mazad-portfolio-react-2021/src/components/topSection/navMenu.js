import { Link } from "react-router-dom";
export default function NavMenu() {
  return (
    <nav className="topSectionNavMenu mt-5">
      <Link className="navItem" to="/about-me">
        About Me!
      </Link>
      <Link className="navItem" to="/my-projects">
        My Projects
      </Link>
      <Link className="navItem" to="/contact-me">
        Contact Me
      </Link>
    </nav>
  );
}
