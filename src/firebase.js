import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNkRzfmRA_GyPh6h4-eTWbG2nadt3j2Mc",
    authDomain: "clone-20769.firebaseapp.com",
    projectId: "clone-20769",
    storageBucket: "clone-20769.appspot.com",
    messagingSenderId: "330199956150",
    appId: "1:330199956150:web:6f6008012dc59833460417",
    measurementId: "G-6XBDJLV8GF"
  };

  const App = initializeApp(firebaseConfig);
  const db = getFirestore(App);
  export default db;