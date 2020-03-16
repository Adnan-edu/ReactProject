import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCTpvytepVlVl2Oo_WUsEDPO4LRBa89v9g",
  authDomain: "todo-list-c12ec.firebaseapp.com",
  databaseURL: "https://todo-list-c12ec.firebaseio.com",
  projectId: "todo-list-c12ec",
  storageBucket: "todo-list-c12ec.appspot.com",
  messagingSenderId: "1048094007634",
  appId: "1:1048094007634:web:fd8ea39929a622bee91a8b"
});

export { firebaseConfig as firebase };
