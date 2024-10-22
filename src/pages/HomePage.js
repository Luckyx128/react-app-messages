import React from 'react';
import Card from '../components/home/card' 
import PushNotifications from "../components/notifications";

const HomePage = () => {
  return (
    <div>
      <PushNotifications/>
      {/* TODO Mostrar mensagens cadastradas no banco */}
        <Card/>
      {/* Adicione aqui outros componentes que a HomePage irá gerenciar */}
    </div>
  );
};

export default HomePage;
