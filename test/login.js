/**
 * This script helps to connect the front-end of Lawsy website to the backend to authenticate login using Firebase
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBEQdn9xtIA8onmzE4ihO7kSsCUi1OltVA",
    authDomain: "lawsywebsite.firebaseapp.com",
    databaseURL: "https://lawsywebsite-default-rtdb.firebaseio.com",
    projectId: "lawsywebsite",
    storageBucket: "lawsywebsite.appspot.com",
    messagingSenderId: "24208591459",
    appId: "1:24208591459:web:4c4d9f6f0284fdcf3e4656",
    measurementId: "G-QT29573SES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = docuemnt.getElementById("login-button");

// Add an event listener to the form login
loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(auth)

    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password) // Sign in with Firebase
        .then((userCredential) => { // If successful
            var user = userCredential.user; // Get the user object
            alert("Welcome " + user.email); // Show a welcome message
            // Do something else with the user object
            window.location.href = "https://www.google.com";
        })
        .catch((error) => { // If failed
            var errorCode = error.code; // Get the error code
            var errorMessage = error.message; // Get the error message
            alert("Error: " + errorCode + " - " + errorMessage); // Show an error message
            // Do something else with the error object
        });
});