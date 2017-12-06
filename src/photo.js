import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import './photo.css';


class Photo extends Component {

  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  handleChange(event) {
    var uploader = document.getElementById('uploader');
    //get file from dom
    var file = event.target.files[0];
    // console.log(file);
    //create storage ref
    var storageRef = firebase.storage().ref('images/' + file.name);
    var task = storageRef.put(file);
    task.on('state_changed',
      function progress(snapshot){
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },

      function error(err){
        console.log(err);
      },

      function complete(){
        //remember to invoke
        var downloadURL = storageRef.getDownloadURL().then(function(url) {
          //test to see if url works
          document.getElementById('url').innerHTML = url ;
          console.log(url);
          //push to firebase items write to database
          auth.onAuthStateChanged((user) => {
            if (user) {
              const itemsRef = firebase.database().ref('items');
              const item = {
                image: user.displayName,
                user: user.email
              };
                itemsRef.push(item);
              }
          });
        });
      }
    );
  }


  render() {


    return (
      <div>
          <progress value="0" max="100" id="uploader">0%</progress>
          <input type='file'  id='fileButton' onChange={this.handleChange}  />
          <div id="notice_wrapper">
            <p id='url'></p>
          </div>
       </div>
    );
  }
}

export default Photo;
