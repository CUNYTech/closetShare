import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import './App.css';




class Photo extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
  		return (
  			<div className="photo">
   				<progress value="0" max="100" id="uploader">0%</progress>
				<input type='file' value='upload' id='filebutton' />
	  		</div>
  	);
  }
 }

export default Photo;