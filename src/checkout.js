import React from 'react';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';


const Checkout = () => {
  let images =  firebase.storage().ref('images');
  return (
    <div>
    Checkout
    </div>
  );
};

export default Checkout;
