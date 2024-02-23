import "../styles/projects.css";
import "../styles/experience.css";
import exp from "../img/exp.png";

const Experience = () => {
  return (
    <section id="experience">
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
        <div className="textAbout">
          <div className="nomeex">Desenvolvedor FullStack</div>
          <br></br>
          <div className="about">
            Companhia de Saneamento de Sergipe{" "}
            <a class="data">/ abril 2022 - o momento / </a>
            <p></p>
            <br></br>- Desenvolvimento do Sistema de Gerenciamento de Frota • Na
            construção do projeto utilizei Javascript, PHP, HTML e CSS • Banco
            de dados utilizado PostgreSQL • Testes unitários e Testes de
            integração
            <br></br>
            <br></br>- Desenvolvimento do Sistema de Treinamentos • Na
            construção do projeto utilizei Javascript, PHP, HTML e CSS • Banco
            de dados utilizado PostgreSQL • Testes unitários e Testes de
            integração!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
