// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.languageCode = 'it'
//db
// if (import.meta.env.MODE != 'production') {
  connectAuthEmulator(auth, 'http://localhost:9099')
// }
export { auth }