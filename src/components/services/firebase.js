// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5b2zjE0W3Jzxy6qho-zLN6NT8K8mTn1Y",
    authDomain: "e-comerce-tecno-house.firebaseapp.com",
    projectId: "e-comerce-tecno-house",
    storageBucket: "e-comerce-tecno-house.appspot.com",
    messagingSenderId: "559598947443",
    appId: "1:559598947443:web:acaf209d1ed21b6e246e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db