import React  from "react";
import './style.css'

type Itens = {
    motivo:string;
    dataenvio:string;
    conteudo:string;
}

type CardProps = {
    item: Itens;
}

const Card: React.FC<CardProps> = ({item}) =>{
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

export default Card;
