// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: " AIzaSyAJKqZ7yyM5Ltc0VY0fUaxYnLnoX2zGE5k ",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: " firstwebsite-5cfad",
  appId: "YOUR_APP_ID",
  // ... any other config values
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
