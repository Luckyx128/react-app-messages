// src/components/Auth/LoadingScreen/index.tsx
import React from "react";
import "./style.css";
import ImgLogo from '../../../img/sedentarios_futebol_clube_logo.png';


const LoadingScreen = () => {
  return <div className="loading-container">
    <img src={ImgLogo} alt="Logo Sedentários"></img>
  </div>;
};

export default LoadingScreen;
