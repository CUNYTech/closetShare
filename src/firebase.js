import firebase from 'firebase'; 

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBlnplUeEq02DQUVnShn-MD9Dld82uv1oA",
    authDomain: "closet-share.firebaseapp.com",
    databaseURL: "https://closet-share.firebaseio.com",
    projectId: "closet-share",
    storageBucket: "closet-share.appspot.com",
    messagingSenderId: "275441314287"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

export default firebase;