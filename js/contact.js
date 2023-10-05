TweenMax.staggerFrom(".form-group", 1, {
    delay: 0.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, 0.2);
  
  TweenMax.staggerFrom(".contact-info-container > *", 1, {
    delay: 0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, 0.1);

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
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("message");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  