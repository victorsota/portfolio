import "../styles/skills.css";
import { FiCodesandbox } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import exp from "../img/grafico.png";

const Skills = () => {
  return (
    <section class="paginas" id="skills">
      <div class="contenttitle">
        <div className="titulo">Sobre nós</div>
        <div class="subtitulo">
          Somos um grupo da universidade mauricio de nassau, esse projeto com
          intuito de concientizar e ajudar sobre o dpvat.{" "}
        </div>
      </div>
      <div className="skills">
        <div class="picture">
          <div className="profile-containerex">
            <img
              className="profile-pictureex"
              src={exp}
              alt="profilePicture"
              title="profilePicture"
            />
          </div>
        </div>
        <div class="picture">
          <div className="profile-containerex">
            <img
              className="profile-pictureex"
              src={exp}
              alt="profilePicture"
              title="profilePicture"
            />
          </div>
        </div>
        <div class="picture">
          <div className="profile-containerex">
            <img
              className="profile-pictureex"
              src={exp}
              alt="profilePicture"
              title="profilePicture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
