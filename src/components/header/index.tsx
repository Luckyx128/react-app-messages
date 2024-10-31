import React from "react";
import './style.css';
import 'boxicons'
import { useNavigate } from "react-router-dom";
const Header = () =>{
    const navigate = useNavigate()
    const logoff = ():void => {
        navigate('/')
    }

    return(
        <header className="header">
           <h2 id='user' >Bem Vindo!</h2>
            <a id={'logoff'} href="#section" onClick={logoff}><box-icon  name='log-out' color='#ffffff' ></box-icon></a>
        </header>
    )
};

export default Header;