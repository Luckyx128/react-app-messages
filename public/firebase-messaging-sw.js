importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    
    apiKey: "AIzaSyAu6MYxCoKFiMiLCyANac6RPXGMGFqxVYw",
    authDomain: "aviso-plansul.firebaseapp.com",
    projectId: "aviso-plansul",
    storageBucket: "aviso-plansul.appspot.com",
    messagingSenderId: "550798766000",
    appId: "1:550798766000:web:02cf661c63b172ac723075",
    measurementId: "G-MF7HYB763R"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });