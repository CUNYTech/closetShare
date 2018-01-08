// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
        <div>
        <CardElement />
        </div>
    );
  }
}

export default CardSection;
