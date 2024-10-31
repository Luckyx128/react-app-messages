// src\components\util\input\index.tsx
import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

function InputPadrao({ tipo, placeholder, nome, value, onChange, checked }) {
  return (
    <input
      id={nome}
      name={nome}
      type={tipo}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      checked={checked} // para inputs do tipo radio
    />
  );
}

InputPadrao.propTypes = {
  tipo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool // Prop para lidar com inputs do tipo radio
};

export default InputPadrao;
