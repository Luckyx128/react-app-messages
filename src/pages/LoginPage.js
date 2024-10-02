// src/pages/LoginPage.js
import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/Auth/LoadingScreen";
import LoginForm from "../components/Auth/LoginForm";
import SingUpForm from "../components/Auth/SingUpForm";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleSignUpClick = () => {
    // Muda para o formulário de cadastro quando o link é clicado
    setIsSignUp(true); 
  };
  
  const handleLoginClick = () => {
    // Muda para o formulário de Login quando o link é clicado
    setIsSignUp(false);
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : isSignUp ? (
        <SingUpForm onLoginClick={handleLoginClick} />
      ) : (
        <LoginForm onSingUpClick={handleSignUpClick} />
      )
    }
    </div>
  );
};

export default LoginPage;
