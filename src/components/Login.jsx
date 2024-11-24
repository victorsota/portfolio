import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "../styles/form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  // Estado para a senha
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setErro("Preencha o email.");
      return;
    }

    // Armazenando o email no localStorage
    localStorage.setItem("email", email);

    // Redirecionando para a página da calculadora
    window.location.reload();
  };

  return (
    <section className="paginas" id="contact">
      <div className="titulo-contactme">Login</div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="e-mail"
          className="inputclass" // Corrigido para className
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          placeholder="Senha"
          className="inputclass" // Corrigido para className
          type="password"
          id="email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button className="buttonenvlogin" type="submit">
          Enviar
        </button>
      </form>
      <div className="fim">
        <h2 className="textfim">Contatos e Redes Sociais</h2>
        <div className="iconerede">
          <div className="redesocial">
            <FaGithub className="iconex" />
            <a className="linksocial">github.com/victorsota</a>
          </div>
          <div className="redesocial">
            <FaLinkedin className="iconex" />
            <a className="linksocial">linkedin.com/in/victor-gabriel-vieira/</a>
          </div>
          <div className="redesocial">
            <TfiEmail className="iconex" />
            <a className="linksocial">victorgabrielfrancisco@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
