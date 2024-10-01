import React from "react";
import './style.css'
import InputPadrao from "../util/input";
import ButtonPadrao from "../util/button"
function CadastroJogos() {

    return (
        <form action="#" method="post">
            <InputPadrao nome="data-jogo" tipo="date"/>
            <InputPadrao nome="hora-jogo" tipo="time"/>
            <InputPadrao nome="limite-jogadores" tipo="number"/>
            <ButtonPadrao titulo="Cadastrar jogo"/>
        </form>
    )
}


export default CadastroJogos