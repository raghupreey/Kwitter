
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAZrf8OKSyL0cmza4v63Xn4u5dXoCOS_7c",
      authDomain: "kwitter-37a91.firebaseapp.com",
      projectId: "kwitter-37a91",
      storageBucket: "kwitter-37a91.appspot.com",
      messagingSenderId: "252560548406",
      appId: "1:252560548406:web:b4235f33db330672f82e97",
      measurementId: "G-7EXZ490NF2"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
