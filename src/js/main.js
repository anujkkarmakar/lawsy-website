const firebaseConfig = {
    apiKey: "AIzaSyCo8e4yfJvGtTIc0QDejI4JYR6fFJr5ETE",
    authDomain: "test-auth-bb13a.firebaseapp.com",
    projectId: "test-auth-bb13a",
    storageBucket: "test-auth-bb13a.appspot.com",
    messagingSenderId: "573131217040",
    appId: "1:573131217040:web:8525b1f80f5c2e14caa015",
    measurementId: "G-ZPTSFJ1D8J"
};

const defaultProject = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

let register = async () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try {
        let userCredential = await auth.createUserWithEmailAndPassword(email, password);
        var user = userCredential.user;
        console.log(user);

        // Wait for addDataToServer() to finish before continuing
        await addDataToServer();
        await stateChangeObserver();
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
    }
};

let signOut = async () => {
    try {
        await auth.signOut();
        await stateChangeObserver();
    } catch (error) {
        alert("Sign out error");
        console.log(error.message);
        console.log(error.code);
    }
};

let addDataToServer = async () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("date-of-birth").value;

    try {
        await db.collection("users").doc(email).set({
            name: name,
            email: email,
            dob: dob
        });
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};

let login = async () => {
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;

    try {
        let userCredential = await auth.signInWithEmailAndPassword(email, password);
        var user = userCredential.user;
        console.log(user);
        await stateChangeObserver();
    } catch (error) {
        console.log("Login error ", error.code);
    }
};

let stateChangeObserver = async () => {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // user signed in. Take to different page the dashboard.html;
            var uid = user.uid;
            console.log(uid);
            console.log("Goto dashboard.html");
            window.location.replace("./dashboard.html");
        } else {
            console.log("User sign out");
            // take the user back to index.html
            console.log("Goto index.html");
            window.location.replace("./index.html");
        }
    });
};

let loadData = async () => {
    console.log(auth.currentUser.email);

    let email = auth.currentUser.email;
    var docRef = db.collection("users").doc(email);
    
    try {
        const doc = await docRef.get();
        if (doc.exists) {
            console.log("Document data:", doc.data());
            
            let name = doc.data().name;
            let email = doc.data().email;
            let dob = doc.data().dob;

            document.getElementById("data").innerHTML = `
                <div class="name" id="name3">Name: ${name}</div>
                <div class="email" id="email3">Email: ${email}</div>
                <div class="dob" id="dob3">DOB: ${dob}</div>
            `;

        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.log("Error getting document:", error);
    }
};