// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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
export const auth = getAuth();

// Get the form elements
const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
// const registerButton = document.getElementById("register-button");
// console.log(registerButton)
const output = document.getElementById("output");

var loginForm = document.getElementById("login-form");
var emailInput2 = document.getElementById("email2");
var passwordInput2 = document.getElementById("password2");
// var signInButton = document.getElementById("sign-in");

document.onload = function () {
    const registerButton = document.getElementById("register-button");
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
                    sendEmailVerification(user)
                        .then(() => {
                            // Email verification sent
                            alert("Email Verification Sent. Please verify and then login back");
                        });
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
}

document.onload = function () {
    var signInButton = document.getElementById("sign-in");
    signInButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        const email = emailInput2.value; // Get the email value
        const password = passwordInput2.value; // Get the password value

        signInWithEmailAndPassword(auth, email, password) // Sign in with Firebase
            .then((userCredential) => { // If successful
                var user = userCredential.user; // Get the user object
                auth.onAuthStateChanged(firebaseUser => {
                    if (firebaseUser) {
                        if (firebaseUser.emailVerified) {
                            window.location.href = "/test/dashboard.html"; // Redirect to another webpage
                        } else {
                            alert("Please verify your email before proceeding.");
                        }
                    }
                });
            })
            .catch((error) => { // If failed
                var errorCode = error.code; // Get the error code
                var errorMessage = error.message; // Get the error message
                alert("Error: " + errorCode + " - " + errorMessage); // Show an error message
                // Do something else with the error object
            });
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;

        window.onload = function () {
            document.getElementById("userInfo").innerHTML =
                '<p>Name: ' + displayName + '</p>' +
                '<p>Email: ' + email + '</p>' +
                '<p>Email Verified: ' + emailVerified + '</p>';
        }
        alert("Email: ", user.email);
        alert("Email Verified: ", user.emailVerified);
        alert("Yes It is retrieved");
    }
    else {
        // No user is signed in.
        document.onload = function () {
            document.getElementById('userInfo').innerHTML = 'No user is signed in.';
        }
    }
});
