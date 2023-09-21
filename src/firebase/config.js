import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB00Ob4kWwvng1WmWNqHV5siysOmTGGByQ",
  authDomain: "miniblog-react-battist.firebaseapp.com",
  projectId: "miniblog-react-battist",
  storageBucket: "miniblog-react-battist.appspot.com",
  messagingSenderId: "1084794342869",
  appId: "1:1084794342869:web:2767c4d141d313efcec15c"
};

const app = initializeApp(firebaseConfig);

// banco de dados
const database = getFirestore(app);

export { database };