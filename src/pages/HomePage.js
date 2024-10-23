import React from 'react';
import Card from '../components/home/card' 
import PushNotifications from "../components/notifications";
import './style.css'

const HomePage = () => {
  return (
    <div className='home'>
      <PushNotifications/>
      {/* TODO Mostrar mensagens cadastradas no banco */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      {/* Adicione aqui outros componentes que a HomePage irá gerenciar */}
    </div>
  );
};

export default HomePage;
