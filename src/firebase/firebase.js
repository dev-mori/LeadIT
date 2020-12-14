import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsJjVcd-VIF3G6v6DNVYNkHG3Z1DWQvz4",
  authDomain: "leadit-55fbe.firebaseapp.com",
  databaseURL: "https://leadit-55fbe.firebaseio.com",
  projectId: "leadit-55fbe",
  storageBucket: "leadit-55fbe.appspot.com",
  messagingSenderId: "994849485974",
  appId: "1:994849485974:web:a9f0dd93cd11ef37a77eb7",
  measurementId: "G-WSY4C5MMHT",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
