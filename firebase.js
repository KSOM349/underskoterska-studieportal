import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PUT_API_KEY_HERE",
  authDomain: "fir-console-df3e9.firebaseapp.com",
  projectId: "fir-console-df3e9",
  storageBucket: "fir-console-df3e9.appspot.com",
  messagingSenderId: "PUT_SENDER_ID_HERE",
  appId: "PUT_APP_ID_HERE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

