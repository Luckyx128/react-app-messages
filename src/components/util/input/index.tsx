// src\components\util\input\index.tsx
import React from "react";
import "./style.css"

type InputPadraoProps = {
    tipo: string,
    placeholder: string,
    nome: string,
}

const InputPadrao: React.FC<InputPadraoProps> = ({tipo, placeholder, nome}) => {
    return <input id={nome} name={nome} type={tipo} placeholder={placeholder} required={true} />

}

export default InputPadrao