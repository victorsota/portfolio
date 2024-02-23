import "../styles/skills.css";
import { FiCodesandbox } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { FaGit } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
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
          <span className="text">BackEnd</span>
          <div class="subicons">
            <FaPhp className="icon" />
            <FaNodeJs className="icon" />
            <FaPython className="icon" />
          </div>
        </div>
        <div class="container">
          <FiCodesandbox className="icon" />
          <span className="text">FrontEnd</span>
          <FaHtml5 className="icon" />
          <FaCss3 className="icon" />
          <FaReact className="icon" />
          <IoLogoJavascript className="icon" />
          <FaVuejs className="icon" />
          <RiFlutterFill className="icon" />
        </div>
        <div class="container">
          <FaDatabase className="icon" />
          <span className="text">Banco de Dados</span>
          <BiLogoPostgresql className="icon" />
          <BiLogoMongodb className="icon" />
          <TbBrandMysql className="icon" />
        </div>
        <div class="container2">
          <FaTools className="icon2" />
          <span className="text">Ferramentas</span>
          <FaGit className="icon" />
          <FaLinux className="icon" />
          <SiPostman className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
