import { React } from "react";
import './style.css'

const Card = () =>{
  return(
    <div className='card'>
      <div className="card-header">
        <h4>
          Titulo da mensagem
        </h4>
      </div>
      <section className="content" >
        <p>

        Informação da mensagem
        </p>
      </section>
    </div>
  )
}

export default Card;
