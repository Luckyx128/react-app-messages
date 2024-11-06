import { RiCalendarScheduleFill } from "react-icons/ri";
import { AiFillSchedule } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GiBabyfootPlayers } from "react-icons/gi";
import { GiPodium } from "react-icons/gi";
import  Card  from "../components/util/card/index";


import React from 'react';
import '../style/HomePage.css'


const Header = ({name, score}) => (
  <header className="menu">
    <h2>{name}</h2>
    <p>Média: {score}</p>
  </header>
);
const Section = ({children}) => (
  <section className="secao">
    {children}
  </section>
);
const HomePage = () => {
  return (
    <main>
      <Header name="Lucas dos Santos" score="97"/>
      <Section>
        <div className="left">
          <Card title="Cadastrar Partidas" icon={<RiCalendarScheduleFill color="white" size="20px"/>} >
            <section className="adjust_date">
              <p>Última data:</p>
              <p>10/10/2024</p>
            </section>
            <section className="adjust_date">
              <p>Próxima data:</p>
              <p>17/10/2024</p>
            </section>
          </Card>
          <Card title="Sorteio de Equipes" icon={<GiBabyfootPlayers color="white" size="20px"/>} >
            <p>Há 20 jogadores confirmados para a partida de 10/10/2024, deseja sortear as equipes?</p>
          </Card>
          <Card title="Sua Equipe" icon={<BsPeopleFill color="white" size="20px"/>} >
            <ol>
              <li>Lucas Rodrigo</li>
              <li>Jonathan⚽⚽</li>
              <li>Gustavo Melo</li>
              <li>Alexandre Bonfim</li>
            </ol>
          </Card>
        </div>
        <div className="right">
          <Card title="Sistema de Notas" icon={<GiPodium color="white" size="20px"/>} >
            <p>Atribuir nota aos participantes da última partida está disponível</p>
          </Card>
          <Card title="Confirmar Presença" icon={<AiFillSchedule color="white" size="20px"/>} >
            <p>Há uma partida agendada para 10/10/2024, deseja confirmar a sua presença?</p>
          </Card>
        </div>
      </Section>
      <footer>&copy; 2024 todos os direitos reservados</footer>
    </main>
  );
};

export default HomePage;
