import "../styles/skills.css";
import { FiCodesandbox } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section class="paginas" id="skills">
      <div class="contenttitle">
        <div className="titulo">Habilidades Técnicas</div>
        <div class="subtitulo">
          Algumas das stacks que mais tenho domínio e também tecnologias que
          venho adquirindo experiências<p></p> através de projetos pessoais e
          profissionais.{" "}
        </div>
      </div>
      <div className="skills">
        <div class="container">
          <FiCodesandbox className="icon" />
          <span className="text">HardSkills</span>
          <div class="habilidades">
            PHP, JavaScript, TypeScript, React, HTML/CSS, Flutter, Python
          </div>
        </div>
        <div class="container2">
          <FaDatabase className="icon" />
          <span className="text">Banco de Dados</span>
          <div class="habilidades">PostgreSql, MySql, MongoDB, SQLite</div>
        </div>
        <div class="container3">
          <FaTools className="icon2" />
          <span className="text">Ferramentas</span>
          <div class="habilidades">Git, Linux, Postman</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
