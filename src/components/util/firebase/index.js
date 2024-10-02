// src/util/firebase/index.js

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, push, orderByChild, equalTo, query  } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCF78UuuZaJX4gwZJ9WVorUzXa0uX_S7sM",
  authDomain: "lista-jogo.firebaseapp.com",
  databaseURL: "https://lista-jogo-default-rtdb.firebaseio.com",
  projectId: "lista-jogo",
  storageBucket: "lista-jogo.appspot.com",
  messagingSenderId: "93914697056",
  appId: "1:93914697056:web:420155ca841442ab2be205",
  measurementId: "G-3SLH6J8Z66" // Necessário para Analytics
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, ref, set, get, child, push, orderByChild, equalTo, query   };
