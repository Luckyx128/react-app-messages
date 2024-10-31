import Cookies from "js-cookie";
import { useState } from "react";
const RefreshToken = (token:string):boolean => {
    const [result,setResult] = useState(false);
    fetch('http://localhost:9090/auth/refresh-token', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({token:token})
        }
    )
        .then(response => {
            if (response.ok){
                return   response.json()
            }else{
                return ['vazio']
            }
          } )
        .then(data => {
            if (data[0] === 'vazio') {
                
                setResult(false)
            } else {
                Cookies.set('refresh-token', data["refreshToken"]);
                Cookies.set('token', data["token"]);
                setResult(true)
            }
        })
    return  result
}

export default RefreshToken;