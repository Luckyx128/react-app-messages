import React from "react";
import PropTypes from 'prop-types'
import './style.css'

function ButtonPadrao({titulo}){
    return <button type="submit"> {titulo} </button>
}

ButtonPadrao.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default ButtonPadrao