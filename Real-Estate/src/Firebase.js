import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "XXXXXX",
    authDomain: "react-ecb20.firebaseapp.com",
    projectId: "react-ecb20",
    storageBucket: "react-ecb20.appspot.com",
    messagingSenderId: "286387184310",
    appId: "1:286387184310:web:5d5488feab797c195c3c17"
  };
  const app = firebase.initializeApp(firebaseConfig);
  export const auth=app.auth();
  export default app;
