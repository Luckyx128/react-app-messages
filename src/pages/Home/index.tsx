import React from 'react';
import Card from '../../components/home/card'
import PushNotifications from "../../components/notifications";
import './style.css'
import Cookies from 'js-cookie';
import RefreshToken from "../../refreshToken";
import {useNavigate} from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

type MessageItem = {
    id: string;
    motivo: string;
    dataenvio: string;
    conteudo: string;
};


const Home = () => {
  const [loaded,setLoaded] = React.useState(false);
  const [messages,setMessages] = React.useState<MessageItem[]>([])
    const navigate   = useNavigate();

  React.useEffect(() => {

  async  function messages() {
      let data = null
      try {
          const response:Response = await fetch(`http://localhost:9090/messages/${Cookies.get('username')}`,
              {
                  method: "GET",
                  headers: {
                      'Authorization': `Bearer ${Cookies.get('token')}`,
                      'Content-Type': 'application/json'
                  }
              })
          if(response.status !== 401) {
              data = await response.json()
                  console.log(data)
                  setMessages(data);
                  setLoaded(true);

          }else{
              console.warn('reiniciar auth')
              let result = RefreshToken(Cookies.get('refresh-token')?? '')
              console.log(result)
              if (!result){navigate('/')}
          }
      }catch (e){
       document.querySelectorAll('h4')[0].innerText = 'Erro ao carregar ultimas mensagens'
      }



  }
  messages()
    },[])
  if (!loaded) {
    return(
          <div id={'homePage'}>
          <Header/>
          <div className='home'>
            <h4>Carregando ultimas mensagens</h4>
          </div>
          <Footer/>
          </div>
        ) 
  }else{
  return (
      <div id={'homePage'}>
      <Header/>
    <div className='home'>
        <PushNotifications/>
        <h1>Ultimos aviso!</h1>
      {/* TODO Mostrar mensagens cadastradas no banco */}
        {messages.map(item => <Card key={item.id} item={item}/>)}
    </div>
      <Footer />
      </div>
  );
  }
};

export default Home;
