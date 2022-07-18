// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXgkBGONoBrv24-Ba1vLlOJInCDycAr8",
  authDomain: "k34234-590ec.firebaseapp.com",
  projectId: "k34234-590ec",
  storageBucket: "k34234-590ec.appspot.com",
  messagingSenderId: "890493515899",
  appId: "1:890493515899:web:4ea5b2ce9bb894d7870ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);