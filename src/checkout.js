import React from 'react';
import firebase from 'firebase';


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
