// src/components/Auth/LoginForm/index.tsx
import React, { useState } from "react";
import ButtonPadrao from "../../util/button";
import InputPadrao from "../../util/inputLoginCadastro";
import { useNavigate } from "react-router-dom"; // Para redirecionar
import Cookies from 'js-cookie';
import "./style.css";

type LoginFormProp = {
 onSingUpClick:() => void;
}

const LoginForm: React.FC<LoginFormProp> = ({ onSingUpClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setMsgErro("");
    async function logar() {
      try {
        const response = await fetch('http://127.0.0.1:9090/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        if (response.ok) {
            const data = await response.json();
            Cookies.set('token', data['token'], {expires: 7});
            Cookies.set('username', username, {expires: 7});
            Cookies.set('refresh-token', data['refreshToken'], {expires: 7})
            navigate("/home");
        } else {
            setMsgErro("Credenciais incorretas");
        }
      } catch (error) {
        setMsgErro('Erro de conexção contate o Administrador!')
      }
        
    }
        logar()
  };

  return (
   <>
       <h2>Entrar</h2>
    <form onSubmit={handleSubmit} className="login-form">
      <InputPadrao
        nome="username"
        tipo="text"
        placeholder="Matricula:"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <InputPadrao
        nome="password"
        tipo="password"
        placeholder="Senha:"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />

        {msgErro && <span id="msgErro" className="erro">{msgErro}</span>}
      <ButtonPadrao titulo={'Entrar'} icone={'log-in-circle'}/>

      <p>
        Não tem uma conta?{" "}
        <a href="#section" id={'cadastrar'} onClick={(e) => { e.preventDefault(); onSingUpClick(); }} >
            Cadastrar
        </a>
      </p>
    </form>
   </>
  );
};

export default LoginForm;
