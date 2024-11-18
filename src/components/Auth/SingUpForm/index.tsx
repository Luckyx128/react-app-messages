// src/components/Auth/LoginForm/index.tsx
import React, { useState } from "react";
import ButtonPadrao from "../../util/button";
import InputPadrao from "../../util/inputLoginCadastro";
import "./style.css";

type SingUpFormProps = {
  onLoginClick: () => void,
}

const SingUpForm: React.FC<SingUpFormProps> = ({ onLoginClick }) => {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const handleSubmit = async (event:any) => {
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

    fetch('http://127.0.0.1:8080/usuario/cadastrar',{
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
      onLoginClick()
    })
    .catch((error) => {
      console.error('Erro:', error);
    });

  };

  return (
      <>
      <h2>Cadastrar</h2>
  <form onSubmit={handleSubmit} className="login-form">
      <InputPadrao nome="usuario" tipo="text" placeholder="Usuário" value={usuario} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsuario(e.target.value) } />
      <InputPadrao nome="nome" tipo="text" placeholder="Nome Completo" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
      <InputPadrao nome="email" tipo="email" placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      <InputPadrao nome="telefone" tipo="tel" placeholder="Telefone" value={telefone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)}/>
      <InputPadrao nome="password" tipo="password" placeholder="Senha" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      <InputPadrao nome="ConfirmPassword" tipo="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
      {msgErro && <span id="msgErro" className="erro">{msgErro}</span>}
      <ButtonPadrao titulo={'Cadastrar'} icone="user-plus" />
      <p>
        Já tem uma conta?{" "}
        <a href="#section" id={'entrar'} onClick={(e) => { e.preventDefault(); onLoginClick(); }} >
          Entrar
        </a>
      </p>
    </form>
      </>
  );
};

export default SingUpForm;
