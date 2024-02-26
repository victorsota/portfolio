import "../styles/skills.css";
import "../styles/projects.css";
import todo from "../img/todo.png";
import filme from "../img/filme.png";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Projects = () => {
  return (
    <section class="paginas" id="projects">
      <div class="contenttitle">
        <div className="titulo">Projetos</div>
        <div class="subtitulo">
          Explore meus projetos recentes, cada um representando uma jornada
          única através<p></p> de tecnologias e inovações.
        </div>
      </div>
      <div class="projetos">
        <div className="card">
          <img
            className="profile-picture"
            src={todo}
            alt="profilePicture"
            title="profilePicture"
          />
          <div className="content">
            <h2 class="tituloprojeto">
              <div class="tituloprojeto">TODO List</div>
              <FaReact className="iconp" title="React" />
              <FaHtml5 className="iconp" title="HTML5" />
              <FaCss3 className="iconp" title="CSS" />
              <IoLogoJavascript className="iconp" title="JavaScript" />
            </h2>
            <p class="desc">
              To-do-list criada com objetivo de ajudar em tarefas do dia a dia.
            </p>
            <a
              href="https://victor-gabriel-todo.up.railway.app/"
              target="_blank"
            >
              <button className="pbutton">Ver projeto</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            className="profile-picture"
            src={filme}
            alt="profilePicture"
            title="profilePicture"
          />
          <div className="content">
            <h2 class="tituloprojeto">
              <div class="tituloprojeto">Filmes</div>
              <FaReact className="iconp" title="React" />
              <FaHtml5 className="iconp" title="HTML5" />
              <FaCss3 className="iconp" title="CSS" />
              <IoLogoJavascript className="iconp" title="JavaScript" />
            </h2>
            <p class="desc">
              projeto que consome e faz buscas dentro de uma API de filmes
            </p>
            <a
              href="https://films-victor-gabriel-v.up.railway.app/"
              target="_blank"
            >
              <button className="pbutton">Ver projeto</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
