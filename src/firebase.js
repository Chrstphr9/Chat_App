import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCFlJAzUlc22X9jhuAJMZ83dLbmTtgQKkc",
  authDomain: "chat-app-70855.firebaseapp.com",
  projectId: "chat-app-70855",
  storageBucket: "chat-app-70855.appspot.com",
  messagingSenderId: "579716191220",
  appId: "1:579716191220:web:00f73121577fd697d69fa1"
};


// const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()