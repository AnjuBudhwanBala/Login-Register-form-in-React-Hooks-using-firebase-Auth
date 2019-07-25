import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "437258096120",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
