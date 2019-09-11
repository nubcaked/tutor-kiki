import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9_IJBg5qTZOpSBzOWKg0TwQ4WcGR-3gA",
  authDomain: "kikitutor-dc3c1.firebaseapp.com",
  databaseURL: "https://kikitutor-dc3c1.firebaseio.com",
  projectId: "kikitutor-dc3c1",
  storageBucket: "",
  messagingSenderId: "688607123177",
  appId: "1:688607123177:web:f082ec316f04001e"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;