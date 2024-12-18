import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { authenticateUser } from "../services/authService";
import "../styles/form.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = ({ onSwitchToRegister }) => {  // Recebe a função como prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authenticateUser(email, password);
      localStorage.setItem("userId", response.userId);
      window.location.reload();
    } catch (error) {
      setErro("Usuário ou senha incorretos!"); 
    }
  };

  return (
    <section className="paginas" id="contact">
      <div className="titulo-contactme">Login</div>

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
        <button
          className="buttonenvregister"
          type="button"
          onClick={onSwitchToRegister}  // Chama a função para mudar para Register
        >
          Cadastre-se
        </button>
        
        {erro && (
          <Stack sx={{ width: "100%", marginTop:5, marginBottom: 2 }} spacing={2}>
            <Alert variant="outlined" severity="error">
              {erro}
            </Alert>
          </Stack>
        )}
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

