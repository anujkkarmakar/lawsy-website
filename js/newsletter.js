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
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var subscribeFormDB = firebase.database().ref("newsletter");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    var emailid = getElementVal("emailid");
  
    saveMessages(emailid);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (emailid) => {
    var newContactForm = subscribeFormDB.push();
  
    newContactForm.set({
      emailid: emailid,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  