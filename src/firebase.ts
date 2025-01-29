import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAlKESWw9TpgIzxcRDr-TIl15CX6QPADow",
  authDomain: "formationtiktok-eac6e.firebaseapp.com",
  projectId: "formationtiktok-eac6e",
  storageBucket: "formationtiktok-eac6e.firebasestorage.app",
  messagingSenderId: "1083673281264",
  appId: "1:1083673281264:web:577a8dbed34ade9d403835",
  measurementId: "G-PWG0CYS9XC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);