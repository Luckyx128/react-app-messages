// src/components/Auth/LoginForm/index.js
import React, { useState } from "react";
import ButtonPadrao from "../../util/button";
import InputPadrao from "../../util/inputLoginCadastro";
import {
  ref,
  get,
  query,
  orderByChild,
  equalTo,
  database,
} from "../../util/firebase";
import { useNavigate } from "react-router-dom"; // Para redirecionar
import "./style.css";

const LoginForm = ({ onSingUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMsgErro("");
    try {
      // Cria uma referência para a tabela "login"
      const userRef = ref(database, "login");

      // Query para verificar se o usuário existe
      const emailQuery = query(userRef, orderByChild("email"), equalTo(email));
      const snapshot = await get(emailQuery);

      if (snapshot.exists()) {
        const userData = Object.values(snapshot.val())[0];

        // Verifica se a senha corresponde
        if (userData.password === password) {
          // Redireciona para a homepage
          navigate("/home");
        } else {
          setMsgErro("Credenciais incorretas");
        }
      } else {
        setMsgErro("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao consultar o usuário: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputPadrao
        nome="email"
        tipo="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputPadrao
        nome="password"
        tipo="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ButtonPadrao titulo="Entrar" />
      {msgErro && <span id="msgErro" className="erro">{msgErro}</span>}

      <p>
        Não tem uma conta?{" "}
        <a href="#" onClick={(e) => {   e.preventDefault();   onSingUpClick(); }} >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
