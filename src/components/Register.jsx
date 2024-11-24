import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { register } from "../services/authService";
import "../styles/form.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Register = ({ onSwitchToLogin }) => {  // Recebe a função para alternar para Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register(email, password);
      localStorage.setItem("userId", response.userId);
      window.location.reload();
    } catch (error) {
      setErro("Erro ao cadastrar usuário!"); 
    }
  };

  return (
    <section className="paginas" id="contact">
      <div className="titulo-contactme">Registre-se</div>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email:</label>
        <input
          placeholder="e-mail"
          className="inputclass"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          placeholder="Senha"
          className="inputclass"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="buttonenvlogin" type="submit">
          Enviar
        </button>

        {/* Exibe alerta de erro se `erro` estiver definido */}
        {erro && (
          <Stack sx={{ width: "100%", marginTop:5, marginBottom: 2 }} spacing={2}>
            <Alert variant="outlined" severity="error">
              {erro}
            </Alert>
          </Stack>
        )}

        {/* Botão para alternar para a tela de login */}
        <button
          className="buttonenvregister"
          type="button"
          onClick={onSwitchToLogin}  // Chama a função para alternar para Login
        >
          Já tenho conta
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

export default Register;
