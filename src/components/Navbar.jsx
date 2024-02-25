import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="icons">
          <li class="logo">
            <Link to="about" smooth={true} duration={500}>
              Victor Gabriel
            </Link>
          </li>
          <div className="navegacao">
            <li class="links">
              <Link to="skills" smooth={true} duration={500}>
                Habilidades
              </Link>
            </li>
            <li class="links">
              <Link to="projects" smooth={true} duration={500}>
                Projetos
              </Link>
            </li>
            <li class="links">
              <Link to="experience" smooth={true} duration={500}>
                Experiencia
              </Link>
            </li>
          </div>
        </div>
        <li class="botaonav">
          <Link to="contact" smooth={true} duration={500}>
            <button className="custom-button">Vamos conversar?</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
