// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set, child, push } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCqFbDsEBA4EnGora8o2PRNfToshr8EuUQ",
    authDomain: "server-image-b9408.firebaseapp.com",
    databaseURL: "https://server-image-b9408-default-rtdb.asia-southeast1.firebasedatabase.app",
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
const database = getDatabase();
export const userName = 'test';

const profile = JSON.parse(localStorage.getItem('profile'));
var firepadRef = ref(database);
const getMeet = () => {
    const urlparams = new URLSearchParams(window.location.search);
    const roomId = urlparams.get("id");

    if (roomId) {
        console.log('vao 1')
        firepadRef = child(firepadRef, roomId);
    } else {
        console.log('vao 2')
        firepadRef = push(firepadRef);
        window.history.replaceState(null, "meet", "?id=" + firepadRef.key);
    }
}

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
    return signOut(auth);
}

export { auth, db, database, storage, logout, app, firepadRef, getMeet };