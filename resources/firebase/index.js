import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3idxPQgChWTusJcixqtNQXzBSFEM8ouU",
  authDomain: "notification-unilight.firebaseapp.com",
  databaseURL: "https://notification-unilight-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notification-unilight",
  storageBucket: "notification-unilight.appspot.com",
  messagingSenderId: "243901647729",
  appId: "1:243901647729:web:c0cb195ad80d298a9484d0",
  measurementId: "G-F9K782DTVD"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getDatabase(app);