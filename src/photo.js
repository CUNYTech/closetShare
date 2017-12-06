import React, { Component } from 'react';
import firebase from 'firebase';


class Photo extends Component {

  constructor(props){
    super(props);
  }


  render() {


    return (
       <input type="file" id="fileButton"/>
    );
  }
}

export default Photo;
