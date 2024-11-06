import React from "react";
import './style.css'
function Card({title, icon, children}) {
   return( 
    <div className="cards">
        <header>
            <h3>{title}</h3>
            {icon}
        </header>
        <div>{children}</div>
    </div>
   );
};
export default Card;
