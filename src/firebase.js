import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

//cloud storage activated

const app = firebase.initializeApp({
    apiKey: "AIzaSyCCXrtdSIvw0ydrsnofBGJGRbXdkpzoog0",
    authDomain: "maven-57cb2.firebaseapp.com",
    databaseURL: "https://maven-57cb2-default-rtdb.firebaseio.com",
    projectId: "maven-57cb2",
    storageBucket: "maven-57cb2.appspot.com",
    messagingSenderId: "821300584363",
    appId: "1:821300584363:web:1b34920082670c9a65fcee"
})

export const auth = app.auth()
export default app

// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };