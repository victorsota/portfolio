import React from "react";
import { BrowserRouter } from "react-router-dom"; // Importando o BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter> {/* Envolvendo os componentes com BrowserRouter */}
      <div className="geral"> {/* Corrigido para className */}
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
