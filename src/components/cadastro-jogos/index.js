// src/components/cadastro-jogos/index.js
import { useState } from "react";
import "./style.css";
import InputPadrao from "../util/input";
import ButtonPadrao from "../util/button";
import { ref, push, set, database } from "../util/firebase"; // Importe Firebase aqui
import { FaCalendarAlt, FaClock } from "react-icons/fa"; // Importa os ícones de calendário e relógio
import { GiSoccerKick } from "react-icons/gi"; // Importa o ícone de chute de futebol

function CadastroJogos() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [qtdJogadores, setQtdJogadores] = useState(0);
  const [limitarJogadores, setLimitarJogadores] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsgErro("");
    // Verifica se os valores de data e hora foram preenchidos corretamente
    if (!data || !hora) {
      setMsgErro("Por favor, preencha a data e a hora.");
      return;
    }

    // Se limitarJogadores for true, validar se a quantidade de jogadores é maior que 0
    if (limitarJogadores && (qtdJogadores <= 0 || isNaN(qtdJogadores))) {
      setMsgErro("Por favor, insira um número válido de jogadores.");
      return;
    }

    try {
      const jogosRef = ref(database, "jogos");
      const newJogoRef = push(jogosRef);

      // Grava os dados do jogo no Firebase
      await set(newJogoRef, {
        data: data,
        hora: hora,
        qtdJogadores: limitarJogadores ? qtdJogadores : null, // Define limite de jogadores se marcado
        limitarJogadores: limitarJogadores,
      });

      setMsgErro("Jogo cadastrado com sucesso!");

      // Resetar os campos após o cadastro
      setData("");
      setHora("");
      setQtdJogadores(0);
      setLimitarJogadores(false);
    } catch (error) {
      console.error("Erro ao cadastrar o jogo: ", error);
    }
  };

  return (
    <form className="CadJogos" onSubmit={handleSubmit}>
      <h2>Cadastro de Jogos</h2>
      <div className="containerDataHora">
        <div className="divAlinhamento">
          <label htmlFor="data-jogo">
            <FaCalendarAlt className="icon" title="Definir Data do Jogo" />
          </label>
          <InputPadrao
            nome="data-jogo"
            tipo="date"
            value={data}
            onChange={({ target }) => setData(target.value)}
          />
        </div>
        <div className="divAlinhamento">
          <label htmlFor="hora-jogo">
            <FaClock className="icon" title="Definir Horário do Jogo"/>
          </label>
          <InputPadrao
            nome="hora-jogo"
            tipo="time"
            value={hora}
            onChange={({ target }) => setHora(target.value)}
          />
        </div>
      </div>

      {/* Switcher Limitar Jogadores */}
      <div className="divAlinhamento">
        <label>Limitar n° de Jogadores?</label>
        <div className="switcher">
          <label>
            Não
            <input
              type="checkbox"
              checked={limitarJogadores}
              onChange={({ target }) => setLimitarJogadores(target.checked)}
            />
            <span className="slider"></span>
            Sim
          </label>
        </div>
      </div>

      {limitarJogadores && (
        <div className="divAlinhamento">
          <label htmlFor="limite-jogadores">
            <GiSoccerKick className="icon" title="Definir Quantidade de Jogadores" />
          </label>
          <InputPadrao
            nome="limite-jogadores"
            tipo="number"
            value={qtdJogadores}
            onChange={({ target }) => setQtdJogadores(Number(target.value))}
          />
        </div>
      )}

      <ButtonPadrao titulo="Cadastrar jogo" />
      {msgErro && (
        <span id="msgErro" className="erro">
          {msgErro}
        </span>
      )}
    </form>
  );
}

export default CadastroJogos;
