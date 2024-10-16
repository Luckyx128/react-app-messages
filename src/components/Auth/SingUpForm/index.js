// src/components/Auth/LoginForm/index.js
import React, { useState } from "react";
import ButtonPadrao from "../../util/button";
import InputPadrao from "../../util/inputLoginCadastro";
import "./style.css";


const SingUpForm = ({ onLoginClick }) => {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    setMsgErro("");
    if (password !== confirmPassword) {
      setMsgErro("As senhas não correspondem!");
      return;
  }
    // Validações dos campos obrigatórios
    if (!usuario || !nome || !email || !telefone || !password || !confirmPassword) {
        setMsgErro("Todos os campos são obrigatórios!");
        return;
      }
    
      if (password !== confirmPassword) {
        setMsgErro("As senhas não correspondem!");
        return;
    }

    fetch('http://127.0.0.1:9090/usuario/cadastrar',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nome,
        email:email,
        password: password,
        phone_number:telefone,
        username:usuario
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch((error) => {
      console.error('Erro:', error);
    });

  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputPadrao nome="usuario" tipo="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value) } />
      <InputPadrao nome="nome" tipo="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
      <InputPadrao nome="email" tipo="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputPadrao nome="telefone" tipo="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
      <InputPadrao nome="password" tipo="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <InputPadrao nome="ConfirmPassword" tipo="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <p>
        Já tem uma conta?{" "}
        <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }} >
          Log in
        </a>
      </p>
      <ButtonPadrao titulo="Cadastrar" />
      {msgErro && <span id="msgErro" className="erro">{msgErro}</span>}
    </form>
  );
};

export default SingUpForm;
