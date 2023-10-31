import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { auth } from "./script.js"; 

onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
    
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    
        document.getElementById("userInfo").innerHTML =
            '<p>Name: ' + displayName + '</p>' +
            '<p>Email: ' + email + '</p>' +
            '<p>Email Verified: ' + emailVerified + '</p>';
    }
    else {
        // No user is signed in.
        document.getElementById('userInfo').innerHTML = 'No user is signed in.';
    }
});

