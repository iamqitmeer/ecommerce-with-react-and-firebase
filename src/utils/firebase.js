// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIt_t3yKtWsgn69YH0YRWnu3luw-9V4WQ",
    authDomain: "fir-with-react-5c5f1.firebaseapp.com",
    projectId: "fir-with-react-5c5f1",
    storageBucket: "fir-with-react-5c5f1.appspot.com",
    messagingSenderId: "1084331437907",
    appId: "1:1084331437907:web:807822370ed7c46df8fba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}