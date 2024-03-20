import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyATZB_XxNNo2ikppK9Bfg5KughYgEOs3zo",
  authDomain: "crazee-burger-1778e.firebaseapp.com",
  projectId: "crazee-burger-1778e",
  storageBucket: "crazee-burger-1778e.appspot.com",
  messagingSenderId: "476534007544",
  appId: "1:476534007544:web:114eb1101c52359d387d0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
