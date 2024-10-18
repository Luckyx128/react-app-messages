import { React } from "react";
import './style.css'
import PushNotifications from "../../notifications/PushNotifications";

const Card = () =>{
  return(
    <div className='card'>
     <PushNotifications/> 
    </div>
  )
}

export default Card;
