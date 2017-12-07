import React from 'react';
<<<<<<< HEAD
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';

======
>>>>>>> master

const Checkout = () => {
  let images =  firebase.storage().ref('images');
  debugger;
  return (
      <div className='checkout'>
      We are at Checkout!!
      </div>
  );
};

export default Checkout;
