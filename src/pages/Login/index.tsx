// src/pages/Index.js
import React, { useState } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import SingUpForm from "../../components/Auth/SingUpForm";
import './style.css'
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    // Muda para o formulário de cadastro quando o link é clicado
    setIsSignUp(true); 
  };
  
  const handleLoginClick = () => {
    // Muda para o formulário de Login quando o link é clicado
    setIsSignUp(false);
  };

  return (
      <div id={'login'}>
        <main id={'loginFormStructure'}>
          <h1>Seja muito bem vindo!</h1>
          {
            isSignUp ? (
                <SingUpForm onLoginClick={handleLoginClick}/>
            ) : (
                <LoginForm onSingUpClick={handleSignUpClick}/>
            )
          }
        </main>
      </div>
  );
};

export default Login;
