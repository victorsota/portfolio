import { Link } from "react-scroll";
import minhaFoto from "../img/minhaFoto.jpeg";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div class="flex items-center p-4">
          <li>
            <Link to="about" smooth={true} duration={500}>
              SOBRE
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              EXPERIENCIA
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500}>
              PROJETOS
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500}>
              FORMACAO
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              CONTATO
            </Link>
          </li>
          <li>
            <img
              class="h-10 w-10 flex-none rounded-full"
              src={minhaFoto}
              alt="profilePicture"
              title="profilePicture"
            />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
