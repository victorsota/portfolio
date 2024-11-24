import React from "react";
import "../styles/about.css";
import minhaFoto from "../img/minhaFoto.jpeg";
import logo from "../img/18.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section class="paginas" id="about">
      <div className="conteudo">
        <div className="textAbout">
          <div className="nome">DPVAT</div>
          <br></br>
          <div className="sobremim">
          O DPVAT (Danos Pessoais causados por Veículos Automotores de Via Terrestre) é um seguro obrigatório no Brasil, criado para indenizar vítimas de acidentes de trânsito, sejam elas motoristas, passageiros ou pedestres. Ele cobre despesas médicas, invalidez permanente e morte, garantindo assistência financeira às pessoas afetadas. O pagamento do seguro é feito anualmente pelos proprietários de veículos junto ao licenciamento. Apesar de ter enfrentado mudanças nos últimos anos, o DPVAT permanece como um importante instrumento de proteção social, proporcionando suporte em momentos de vulnerabilidade e promovendo a segurança no trânsito.
          </div>
          <div class="localbotao">
            <div class="botaoabout">
              <Link to="calculator" smooth={true} duration={500}>
                <button className="botaoabout2">Calcule seu DPVAT</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <img
            className="profile-picture"
            src={logo}
            alt="profilePicture"
            title="profilePicture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
