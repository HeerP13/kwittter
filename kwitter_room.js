
var firebaseConfig = {
      apiKey: "AIzaSyDegj0U7V_BWsHg9wTz58TVPerXVwYS8-I",
      authDomain: "chatapp-97854.firebaseapp.com",
      databaseURL: "https://chatapp-97854.firebaseio.com",
      projectId: "chatapp-97854",
      storageBucket: "chatapp-97854.appspot.com",
      messagingSenderId: "394991098390",
      appId: "1:394991098390:web:3a5cef2dbb84353605b337",
      measurementId: "G-Z4PEB34GY8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
