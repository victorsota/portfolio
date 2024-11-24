import "../styles/experience.css";
import exp from "../img/grafico.png";

const Experience = () => {
  return (
    <section class="paginas" id="experience">
      <div className="tituloex">Dados</div>
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
          <div className="nomeex">DPVAT em Sergipe</div>
          <br></br>
          <div className="about">
            
O DPVAT é um seguro obrigatório no Brasil que oferece indenização a vítimas de acidentes de trânsito, cobrindo casos de morte, invalidez permanente e despesas médicas. No estado de Sergipe, o número de indenizações tem refletido a realidade das vítimas locais, com destaque para as compensações em caso de morte e invalidez total. Dados recentes mostram que, enquanto os valores de reembolso para despesas médicas são mais baixos, as indenizações por invalidez, especialmente a total, apresentam um impacto significativo na população. Esses números ressaltam a importância do DPVAT para garantir suporte financeiro às vítimas e suas famílias, aliviando parte das dificuldades enfrentadas após acidentes de trânsito
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
