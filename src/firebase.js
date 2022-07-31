// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN_FIREBASE,

  databaseURL: process.env.REACT_APP_DATABASE_URL,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_APP_ID

};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)

// Get a list of cities from your database
/* async function getHeadphones(db) {
  const headphonesCol = collection(db, 'headphones');
  const headphonesSnapshot = await getDocs(headphonesCol);
  const headphoneList = headphonesSnapshot.docs.map(doc => doc.data());
  return headphoneList;
} */
