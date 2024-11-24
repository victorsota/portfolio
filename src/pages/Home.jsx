import React, { useState, useEffect } from 'react';
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Calculator from "../components/Calculadora";
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    // Verifica se o email está armazenado no localStorage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSwitchToRegister = () => {
    setIsRegistering(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegistering(false);
  };

  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      
      {isRegistering ? (
        <Register onSwitchToLogin={handleSwitchToLogin} />  // Passa a função para o Register
      ) : isLoggedIn ? (
        <Calculator />
      ) : (
        <Login onSwitchToRegister={handleSwitchToRegister} />
      )}
    </div>
  );
};

export default Home;
