// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
const analytics = getAnalytics(app);

console.log(app)

// script.js
// Initialize Firebase app


// Get the auth service
const auth = getAuth();

// Get the form elements
const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const registerButton = document.getElementById("register-button");
const output = document.getElementById("output");

var loginForm = document.getElementById("login-form");
var emailInput2 = document.getElementById("email2");
var passwordInput2 = document.getElementById("password2");
var signInButton = document.getElementById("sign-in");

// Add an event listener to the form submit
registerButton.addEventListener("click", (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Get the email and password values
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if the password and confirm password match
    if (password === confirmPassword) {
        // Try to create a user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User created successfully
                const user = userCredential.user;
                console.log(user)
                output.textContent = `User ${user.email} registered successfully.`;
            })
            .catch((error) => {
                // User creation failed
                const errorCode = error.code;
                const errorMessage = error.message;
                output.textContent = `Error ${errorCode}: ${errorMessage}`;
            });
    } else {
        // Password and confirm password do not match
        output.textContent = "Password and confirm password do not match.";
    }
});

signInButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const email = emailInput2.value; // Get the email value
    const password = passwordInput2.value; // Get the password value

    signInWithEmailAndPassword(auth, email, password) // Sign in with Firebase
        .then((userCredential) => { // If successful
            var user = userCredential.user; // Get the user object
            alert("Welcome " + user.email); // Show a welcome message
            // Do something else with the user object
        })
        .catch((error) => { // If failed
            var errorCode = error.code; // Get the error code
            var errorMessage = error.message; // Get the error message
            alert("Error: " + errorCode + " - " + errorMessage); // Show an error message
            // Do something else with the error object
        });
});


// Sign in with Google
// googleSignInButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission
//     var provider = new firebase.auth.GoogleAuthProvider(); // Create a Google provider object
//     auth.signInWithPopup(provider) // Sign in with Firebase using a popup window
//         .then(function (userCredential) { // If successful
//             var user = userCredential.user; // Get the user object
//             alert("Welcome " + user.displayName); // Show a welcome message
//             // Do something else with the user object
//         })
//         .catch(function (error) { // If failed
//             var errorCode = error.code; // Get the error code
//             var errorMessage = error.message; // Get the error message
//             alert("Error: " + errorCode + " - " + errorMessage); // Show an error message
//             // Do something else with the error object
//         });
// });

// // Sign in with Facebook
// facebookSignInButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission
//     var provider = new firebase.auth.FacebookAuthProvider(); // Create a Facebook provider object
//     auth.signInWithPopup(provider) // Sign in with Firebase using a popup window
//         .then(function (userCredential) { // If successful
//             var user = userCredential.user; // Get the user object
//             alert("Welcome " + user.displayName); // Show a welcome message
//             // Do something else with the user object
//         })
//         .catch(function (error) { // If failed
//             var errorCode = error.code; // Get the error code
//             var errorMessage = error.message; // Get the error message
//             alert("Error: " + errorCode + " - " + errorMessage); // Show an error message
//             // Do something else with the error object
//         });
// });