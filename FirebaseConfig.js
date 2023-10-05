// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWckf3vgpbURCMpvKezMzu3da6UdoX8lI",
  authDomain: "myreactnativefirebase-5c279.firebaseapp.com",
  projectId: "myreactnativefirebase-5c279",
  storageBucket: "myreactnativefirebase-5c279.appspot.com",
  messagingSenderId: "785242365059",
  appId: "1:785242365059:web:15312d546f4c975a4e4fb6",
};

// Initialize Firebase


export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIREBASE_DB = getFirestore(FIREBASE_APP);

