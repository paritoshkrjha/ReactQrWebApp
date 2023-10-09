import { initializeApp }  from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase , ref} from "firebase/database";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAUzeV6KB4xwCoFfeGabjz5bMUvdXJ_qoY",
  authDomain: "otp-auth-48162.firebaseapp.com",
  projectId: "otp-auth-48162",
  storageBucket: "otp-auth-48162.appspot.com",
  messagingSenderId: "1039176332601",
  appId: "1:1039176332601:web:7a5c1062ac224418f7e4e8",
  measurementId: "G-FNXRHHTP1N",
  databaseURL: "https://otp-auth-48162-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const store = getFirestore(app);




