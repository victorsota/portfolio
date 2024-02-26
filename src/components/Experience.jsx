import "../styles/experience.css";
import exp from "../img/exp.png";

const Experience = () => {
  return (
    <section class="paginas" id="experience">
      <div className="tituloex">Experiencia</div>
      <div className="conteudo">
        <div className="profile-containerex">
          <img
            className="profile-pictureex"
            src={exp}
            alt="profilePicture"
            title="profilePicture"
          />
        </div>
        <div className="textexp">
          <div className="nomeex">Desenvolvedor FullStack</div>
          <br></br>
          <div className="about">
            Atualmente, sou Dev. Full Stack na Companhia de Saneamento de
            Sergipe (Deso). Iniciei minha jornada em 2022 e tive a oportunidade
            de passar por diversos projetos importantes para a empresa. Atuei
            juntamente com o time de tecnologia composto por Desenvolvedores
            Back-end, Front-end e QAs, utilizando tecnologias diversas como PHP,
            React, Javascript, Typescrit, Flutter, PostgreSql para construir
            aplicações como o Sistema de Frotas da Companhia.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
