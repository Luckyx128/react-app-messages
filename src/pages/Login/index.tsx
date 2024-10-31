// src/pages/LoginPage.js
import React, { useState } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import SingUpForm from "../../components/Auth/SingUpForm";

const LoginPage = () => {
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
      {
       isSignUp ? (
        <SingUpForm onLoginClick={handleLoginClick} />
      ) : (
        <LoginForm onSingUpClick={handleSignUpClick} />
      )
    }
    </div>
  );
};

export default LoginPage;
