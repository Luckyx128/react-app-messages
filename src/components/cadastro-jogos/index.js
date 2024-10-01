import { useState } from 'react';
import './style.css'
import InputPadrao from "../util/input";
import ButtonPadrao from "../util/button"
import firebase from "firebase/compat/app";
function CadastroJogos() {
    // const db = firebase.firestore()

    const [data, setData] = useState("")
    const [hora, setHora] = useState("")
    const [qtd_jogadores, setQtdJogadores] = useState(0)
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(data,hora,qtd_jogadores)
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='data-jogo'>Data do jogo:</label>
                <InputPadrao nome="data-jogo" tipo="date" onChange={({ target }) => setData(target.value)}/>
            
            <label htmlFor='hora-jogo'>Hora do jogo</label>
            <InputPadrao nome="hora-jogo" tipo="time" onChange={({ target }) => setHora(target.value)}/>
          
            <label htmlFor='ativar-limite'>Limitar numero do jogadores?</label>
            <InputPadrao nome="ativar-limite" tipo="checkbox" />
          
            <label htmlFor='limite-jogadores'>Quantidade maxima de jogadores </label>
            <InputPadrao nome="limite-jogadores" tipo="number" onChange={({ target }) => setQtdJogadores(target.value)}/>
            
            <ButtonPadrao titulo="Cadastrar jogo"/>
        </form>
    )
}


export default CadastroJogos