import React from 'react';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';

const Checkout = () => {
  let images =  firebase.storage().ref('images');
  return (
      <div className='checkout'>
      We are at Checkout!!
      </div>
  );
};

export default Checkout;
