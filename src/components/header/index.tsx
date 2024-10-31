import React from "react";
import './style.css';
import 'boxicons'
const Header = () =>{
    return(
        <header className="header">
           <h2 id='user' >Bem Vindo!</h2>
            <box-icon id={'logoff'} name='log-out' color='#ffffff'></box-icon>
        </header>
    )
};

export default Header;