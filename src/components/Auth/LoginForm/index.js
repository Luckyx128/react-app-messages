// src/components/Auth/LoginForm/index.js
import React, { useState } from "react";
import ButtonPadrao from "../../util/button";
import InputPadrao from "../../util/inputLoginCadastro";
import {useNavigate } from "react-router-dom"; // Para redirecionar
import Cookies from 'js-cookie';
import "./style.css";
const LoginForm = ({ onSingUpClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMsgErro("");

    fetch('http://127.0.0.1:9090/auth/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.info(data['token'])
      Cookies.set('token', data['token'], { expires: 7 });
      navigate("/home");
    })
    .catch((error) => {
      setMsgErro("Credenciais incorretas");
      console.error('Erro:', error);
    });
    // try {
    //   // Cria uma referência para a tabela "login"
    //   const userRef = ref(database, "login");

    //   // Query para verificar se o usuário existe
    //   const emailQuery = query(userRef, orderByChild("email"), equalTo(email));
    //   const snapshot = await get(emailQuery);

    //   if (snapshot.exists()) {
    //     const userData = Object.values(snapshot.val())[0];

    //     // Verifica se a senha corresponde
    //     if (userData.password === password) {
    //       // Redireciona para a homepage
    //       navigate("/home");
    //     } else {
    //       setMsgErro("Credenciais incorretas");
    //     }
    //   } else {
    //     setMsgErro("Usuário não encontrado");
    //   }
    // } catch (error) {
    //   console.error("Erro ao consultar o usuário: ", error);
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputPadrao
        nome="username"
        tipo="text"
        placeholder="Matricula"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
