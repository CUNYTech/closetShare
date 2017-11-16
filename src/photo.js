import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class Photo extends Component {
  state = {
    username: '',
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: ''
  };
  componentDidUpdate(){
   var ref = firebase.database().ref('products');
   // .equalTo('Test Product 1');
   // console.log(ref);
   ref.on("value", function(snapshot) {
    
    

}, function (error) {
   // console.log("Error: " + error.code);
});
  }
  handleChangeUsername = (event) => this.setState({username: event.target.value});
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    // console.error(error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };

  render() {
    	firebase.auth().onAuthStateChanged(function(user) {
  		if (user) {
   			// console.log('i hate you');
  		} else {
    // No user is signed in.
  }
});
      
  	
    return (
      <div>
        <form>
          <label>Username:</label>
          <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername} />
          <label>Avatar:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img src={this.state.avatarURL} />
          }
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
        // {console.log(this.state.avatarURL)}
        <img src={this.state.avatarURL} alt='none' />
      </div>
    );
  }
}

export default Photo;