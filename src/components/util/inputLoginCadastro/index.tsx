// src\components\util\input\index.tsx
import React, {ChangeEventHandler} from "react";
import "./style.css";

type InputPadraoProps = {
  tipo: string,
  nome: string,
  placeholder: string,
  value: string,
  onChange:ChangeEventHandler,
};

const InputPadrao:React.FC<InputPadraoProps> =  ({
                                                   tipo,
                                                   placeholder,
                                                   nome,
                                                   value,
                                                   onChange}) => {
  return (
    <input
      id={nome}
      name={nome}
      type={tipo}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={true}
    />
  );
}



export default InputPadrao;
