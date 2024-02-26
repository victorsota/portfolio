import React from "react";
import "../styles/about.css";
import minhaFoto from "../img/minhaFoto.jpeg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section class="paginas" id="about">
      <div className="conteudo">
        <div className="textAbout">
          <div className="nome">Victor Gabriel</div>
          <br></br>
          <div className="sobremim">
            Olá, sou estudante de Sistemas de Informação na Universidade
            Tiradentes e atualmente atuo como Desenvolvedor Full-Stack. Iniciei
            na área em 2019 utilizando HTML, CSS e Java para a construção de
            alguns projetos. Hoje, minha stack é formada principalmente em PHP,
            Node.js e Typescript. Tenho também conhecimentos em Python e Flutter
            e na área de banco de dados tenho experiência com SQL, MySQL e
            PostgreSQL Buscando sempre novos conhecimentos para inovar e
            desenvolver boas soluções!
          </div>
          <div class="localbotao">
            <div class="botaoabout">
              <Link to="projects" smooth={true} duration={500}>
                <button className="botaoabout2">Conheça meus projetos</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <img
            className="profile-picture"
            src={minhaFoto}
            alt="profilePicture"
            title="profilePicture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
