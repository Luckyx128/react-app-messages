import Cookies from "js-cookie";
const RefreshToken = (token:string):Promise<boolean> => {
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
                return false
            } else {
                Cookies.set('refresh-token', data["refreshToken"]);
                Cookies.set('token', data["token"]);
                return true
            }
        })
}

export default RefreshToken;