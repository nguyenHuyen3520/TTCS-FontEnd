// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqFbDsEBA4EnGora8o2PRNfToshr8EuUQ",
    authDomain: "server-image-b9408.firebaseapp.com",
    databaseURL: "https://server-image-b9408.firebaseio.com",
    projectId: "server-image-b9408",
    storageBucket: "server-image-b9408.appspot.com",
    messagingSenderId: "1069754456737",
    appId: "1:1069754456737:web:9a31b9260131a11165aee0",
    measurementId: "G-MXTDKJ2RB0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
    return signOut(auth);
}

export { auth, db, storage, logout };