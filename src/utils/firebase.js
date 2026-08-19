// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ig_930yS1NOhrSmxBsA2H5jiSu7fDYo",
  authDomain: "netflix-25c13.firebaseapp.com",
  projectId: "netflix-25c13",
  storageBucket: "netflix-25c13.firebasestorage.app",
  messagingSenderId: "672740570517",
  appId: "1:672740570517:web:152f32d9aaa1eb2561f29c",
  measurementId: "G-2KXHMGBVN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()