import React from "react";

import './style.css'
import 'boxicons'
type ButtonPadraoProps = {
    titulo : string;
    icone: string
};

const ButtonPadrao: React.FC<ButtonPadraoProps> = ({titulo,icone}) =>{
    return <button type="submit"> {titulo} <box-icon color='white' name={icone}></box-icon>
         </button>
}


export default ButtonPadrao