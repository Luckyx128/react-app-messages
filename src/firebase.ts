// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu6MYxCoKFiMiLCyANac6RPXGMGFqxVYw",
  authDomain: "aviso-plansul.firebaseapp.com",
  projectId: "aviso-plansul",
  storageBucket: "aviso-plansul.appspot.com",
  messagingSenderId: "550798766000",
  appId: "1:550798766000:web:02cf661c63b172ac723075",
  measurementId: "G-MF7HYB763R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app)  