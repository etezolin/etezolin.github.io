// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import type { Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrH9oXJTy3tuyUupdYEUBxQqfCwvm7x9E",
  authDomain: "etezolin-ac833.firebaseapp.com",
  projectId: "etezolin-ac833",
  storageBucket: "etezolin-ac833.firebasestorage.app",
  messagingSenderId: "668249899832",
  appId: "1:668249899832:web:46f5619b550abeffa7f7cd",
  measurementId: "G-JJLJZ00T8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

export { app, analytics };
