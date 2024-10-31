// src\components\util\input\index.tsx
import React from "react";
import PropTypes from 'prop-types'
import "./style.css"
function InputPadrao({tipo, placeholder, nome}){
    return <input id={nome} name={nome} type={tipo} placeholder={placeholder} />

}

InputPadrao.propTypes = {
    tipo:           PropTypes.string.isRequired,
    nome:           PropTypes.string.isRequired,
    placeholder:    PropTypes.string
}
export default InputPadrao