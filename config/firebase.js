import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ0uVwKADgP7ApVt12-PhhaEtVpj5NaUo",
  authDomain: "city-health-care-a3530.firebaseapp.com",
  projectId: "city-health-care-a3530",
  storageBucket: "city-health-care-a3530.appspot.com",
  messagingSenderId: "1085900907557",
  appId: "1:1085900907557:web:53defee78fbb30ec2f8bcc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
