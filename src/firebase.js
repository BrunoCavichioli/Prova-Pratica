import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJFxEzRDNKkMwmeHqAuY0mZszCeQoBvFI",
  authDomain: "prova-pratica2.firebaseapp.com",
  projectId: "prova-pratica2",
  storageBucket: "prova-pratica2.firebasestorage.app",
  messagingSenderId: "1040557358245",
  appId: "1:1040557358245:web:d56a158a63b63770e4614c",
  measurementId: "G-CNKNP302F9"
};

const app = initializeApp(firebaseConfig);

// 🔥 ESSAS LINHAS SÃO OBRIGATÓRIAS
export const auth = getAuth(app);
export const db = getFirestore(app);