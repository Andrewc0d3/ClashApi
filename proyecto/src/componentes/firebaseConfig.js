import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBim557aJzH2miPZk9J996m9FFSNlMQBfE",
    authDomain: "clashapi-92134.firebaseapp.com",
    projectId: "clashapi-92134",
    storageBucket: "clashapi-92134.firebasestorage.app",
    messagingSenderId: "85808121724",
    appId: "1:85808121724:web:c0c5f1e1b1310f2dc606f9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };