import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="icons">
          <li class="logo">
            <Link to="about" smooth={true} duration={500}>
              <button class="btnlink"> Victor Gabriel </button>
            </Link>
          </li>
          <div className="navegacao">
            <li class="links">
              <Link to="skills" smooth={true} duration={500}>
                <button class="btnlink">Habilidades</button>
              </Link>
            </li>
            <li class="links">
              <Link to="projects" smooth={true} duration={500}>
                <button class="btnlink">Projetos</button>
              </Link>
            </li>
            <li class="links">
              <Link to="experience" smooth={true} duration={500}>
                <button class="btnlink">Experiência</button>
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
