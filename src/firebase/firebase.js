import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCqFbDsEBA4EnGora8o2PRNfToshr8EuUQ",
    authDomain: "server-image-b9408.firebaseapp.com",
    projectId: "server-image-b9408",
    storageBucket: "server-image-b9408.appspot.com",
    messagingSenderId: "1069754456737",
    appId: "1:1069754456737:web:9a31b9260131a11165aee0",
    measurementId: "G-MXTDKJ2RB0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

// Custom Hook

// Storage
export async function upload(file, name, setLoading) {
    const fileRef = ref(storage, name + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    setLoading(false);
    alert("Uploaded file!");
}