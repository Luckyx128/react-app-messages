import { useEffect } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase"; // Certifique-se de que o messaging foi exportado corretamente

const PushNotifications = () => {
  useEffect(() => {
    // Verifica se o navegador suporta notificações
    if ("Notification" in window) {
      Notification.requestPermission()
        .then(permission => {
          if (permission === "granted") {
            // Inicializa o Firebase Messaging e obtém o token
            getToken(messaging, { vapidKey: "BPkSlKHt-IU4KubtRBZw-OANPkxO3bh4ArW9gYSk0A4AELx7d-f0QkLv7-W3zbONVeybScmCvfHh15YXU5CYPaU" }) // Substitua YOUR_VAPID_KEY pelo VAPID key do seu projeto
              .then((currentToken) => {
                if (currentToken) {
                  console.log("Token:", currentToken);
                onMessage((payload) => {
                  console.log('Message received. ', payload);
                  // ...
                });
                  // Aqui você pode enviar o token ao backend ou armazená-lo conforme necessário
                } else {
                  console.error("Nenhum token disponível. Solicite permissão ao usuário.");
                }
              })
              .catch((error) => {
                console.error("Erro ao obter token:", error);
              });
          } else {
            console.error("Permissão de notificação negada.");
          }
        })
        .catch((error) => {
          console.error("Erro ao solicitar permissão de notificação:", error);
        });
    } else {
      console.error("Notificações não são suportadas neste navegador.");
    }
  }, []);

};

export default PushNotifications;
