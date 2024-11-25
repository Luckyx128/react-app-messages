import React, {useState,useEffect} from 'react';
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
    const [loaded,setLoaded] = useState(false);
    const [mensagens,setmensagens] = useState<MessageItem[]>([])
    const navigate   = useNavigate();

    const apagarMensagem = (mensagem:MessageItem) => {
        setmensagens((prevMensagens) =>
            prevMensagens.filter((item) => item.id !== mensagem.id)
        );
    }
    useEffect(() => {

        async  function messages() {
            let data = null
            try {
                const response:Response =  await fetch(`http://localhost:8080/messages/${Cookies.get('username')}`,
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
                    setmensagens(data);
                    console.log(messages)
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
                    {mensagens.map(item =>
                        <>

                            <Card key={item.id} item={item} fechar={
                                                                    <span onClick={() => apagarMensagem(item)}>
                                                                     x
                                                                    </span>}
                            />

                        </>)}
                </div>
                <Footer/>
            </div>
        );
    }
};

export default Home;
