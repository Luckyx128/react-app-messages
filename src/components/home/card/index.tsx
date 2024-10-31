import React  from "react";
import './style.css'
import PropTypes from "prop-types";

const Card = ({item}) =>{
  return(
    <div className='card'>
      <div className="card-header">
        <h4>
            {item.motivo}
        </h4>
        <span>
              {item.dataenvio}
        </span>
      </div>
      <section className="content" >
        <p>
            {item.conteudo}
        </p>
      </section>
    </div>
  )
}
Card.propTypes = {
    item: PropTypes.object.isRequired,
}
export default Card;
