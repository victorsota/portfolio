import React, { useState, useEffect } from 'react';
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Calculator from "../components/Calculadora";
import Login from "../components/Login";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o email está armazenado no localStorage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      {isLoggedIn ? <Calculator /> : <Login />}
    </div>
  );
};

export default Home;
