import React from 'react';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';


class Checkout extends React.Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_dfQBmg41nVrDIbVWJcDctViP">
      <div>
      <MyStoreCheckout />
      </div>
    </StripeProvider>
    );
  }
}

export default Checkout;
