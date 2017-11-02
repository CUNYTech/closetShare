import firebase from 'firebase'; 

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlnplUeEq02DQUVnShn-MD9Dld82uv1oA",
    authDomain: "closet-share.firebaseapp.com",
    databaseURL: "https://closet-share.firebaseio.com",
    projectId: "closet-share",
    storageBucket: "",
    messagingSenderId: "275441314287"
  };
  firebase.initializeApp(config);

export default firebase;