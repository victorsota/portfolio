import "../styles/form.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || assunto === "" || mensagem === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: assunto,
      message: mensagem,
      email: email,
    };
    emailjs
      .send(
        "service_75euycg",
        "template_wr4ljjd",
        templateParams,
        "YN6R2IIqm_162n00U"
      )
      .then(
        (response) => {
          console.log("mensagem enviada", response.status, response.text);
          setAssunto("");
          setEmail("");
          setMensagem("");
        },
        (err) => {
          console.log("erro:", err);
        }
      );
  };

  return (
    <section class="paginas" id="contact">
      <div className="titulo-contactme">Calcule</div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="e-mail"
          class="inputclass"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="assunto">Nome:</label>
        <input
          placeholder="Nome"
          class="inputclass"
          type="text"
          id="assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          required
        />
        <label class="xx" htmlFor="mensagem">
          {" "}
          Mensagem:
        </label>
        <textarea
          placeholder="Mensagem"
          class="inputclass"
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
        <button className="buttonenv" type="submit">
          Enviar
        </button>
      </form>
      <div class="fim">
        <h2 class="textfim">Contatos e Redes Sociais</h2>
        <div class="iconerede">
          <div class="redesocial">
            <FaGithub className="iconex" />
            <a class="linksocial">github.com/victorsota</a>
          </div>
          <div class="redesocial">
            <FaLinkedin className="iconex" />
            <a class="linksocial">linkedin.com/in/victor-gabriel-vieira/</a>
          </div>
          <div class="redesocial">
            <TfiEmail className="iconex" />
            <a class="linksocial">victorgabrielfrancisco@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
