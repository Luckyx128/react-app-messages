import React from "react";
import CadastroJogos from "../components/cadastro-jogos";


const HomePage = () => {
  return (
    <div className="container">
      <div className="layout">{<CadastroJogos />}</div>
    </div>
  );
};

export default HomePage;
