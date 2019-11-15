import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2_tdp-_x4uhJeIFXNTlufAVQGkObtsyg",
  authDomain: "gamerspilot.firebaseapp.com",
  databaseURL: "https://gamerspilot.firebaseio.com",
  projectId: "gamerspilot",
  storageBucket: "gamerspilot.appspot.com",
  messagingSenderId: "1014397763215",
  appId: "1:1014397763215:web:d96fd3ccca5056572efafa"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
