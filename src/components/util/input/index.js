// src/components/util/input/index.js
import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

function InputPadrao({tipo, placeholder, nome, value, onChange}) {
    return (
        <input
            id={nome}
            name={nome}
            type={tipo}
            placeholder={placeholder}
            value={value}          // Adicionando o value
            onChange={onChange}     // Adicionando a função onChange
        />
    );
}

InputPadrao.propTypes = {
    tipo: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Adicionando validação do value
    onChange: PropTypes.func.isRequired // onChange é obrigatório para capturar o valor
};

export default InputPadrao;
