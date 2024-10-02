// src/components/Auth/LoginForm/index.js
import React, { useState } from "react";
import ButtonPadrao from "../../util/button";
import InputPadrao from "../../util/inputLoginCadastro";
import "./style.css";
import { ref, push, set, database } from "../../util/firebase"


const SingUpForm = ({ onLoginClick }) => {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tipoPlano, setTipoPlano] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    setMsgErro("");

    // Validações dos campos obrigatórios
    if (!usuario || !nome || !email || !telefone || !password || !confirmPassword || !tipoPlano) {
        setMsgErro("Todos os campos são obrigatórios!");
        return;
      }
    
      if (password !== confirmPassword) {
        setMsgErro("As senhas não correspondem!");
        return;
    }

    try {
      const userRef = ref(database, "login");
      const newUserRef = push(userRef);

      await set(newUserRef, {
        usuario: usuario,
        nome: nome,
        email: email,
        telefone: telefone,
        password: password,
        tipoPlano: tipoPlano,
      });

      
      onLoginClick()
    } catch (error) {
        setMsgErro("Erro ao cadastrar o usuario: ", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputPadrao nome="usuario" tipo="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value) } />
      <InputPadrao nome="nome" tipo="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
      <InputPadrao nome="email" tipo="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputPadrao nome="telefone" tipo="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
      <InputPadrao nome="password" tipo="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <InputPadrao nome="ConfirmPassword" tipo="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <div>
        <label>
          <InputPadrao nome="tipo_plano" tipo="radio" value="mensal" checked={tipoPlano === 'mensal'} onChange={(e) => setTipoPlano(e.target.value)} />
            Mensal
        </label>
        <label>
          <InputPadrao nome="tipo_plano" tipo="radio" value="diario" checked={tipoPlano === 'mensal'} onChange={(e) => setTipoPlano(e.target.value)} />
            Diário
        </label>
      </div>
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
