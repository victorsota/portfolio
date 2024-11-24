import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o email está armazenado no localStorage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Limpa o localStorage e atualiza o estado de login
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav>
      <ul>
        <div className="icons">
          <li className="logo">
            <Link to="about" smooth={true} duration={500}>
              <button className="btnlink"> DPVAT </button>
            </Link>
          </li>
          <div className="navegacao">
            <li className="links">
              <Link to="skills" smooth={true} duration={500}>
                <button className="btnlink">Sobre nós</button>
              </Link>
            </li>
            <li className="links">
              <Link to="experience" smooth={true} duration={500}>
                <button className="btnlink">Experiência</button>
              </Link>
            </li>
            <li className="links">
              <Link to="experience" smooth={true} duration={500}>
                <button className="btnlink">Dados</button>
              </Link>
            </li>
          </div>
        </div>
          {isLoggedIn ? (
            <li className="botaonav">
            <>
              <Link to="calculator" smooth={true} duration={500}>
                <button className="calculator2">Calculadora</button>
              </Link>
              <button
                className="calculator"
                onClick={handleLogout}
                style={{ marginLeft: "10px" }} // Espaço entre os botões
              >
                Deslogar
              </button>
            </>
            </li>
          ) : (
            <li className="botaologin">
            <Link to="contact" smooth={true} duration={500}>
              <button className="custom-button">Login</button>
            </Link>
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
