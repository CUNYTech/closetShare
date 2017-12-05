import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const Checkout = () => {
  return (
    <div>
    <script src="https://js.stripe.com/v3/"></script>
    
    <form action="/charge" method="post" id="payment-form">
      <div class="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <div id="card-element">
        </div>
        <div id="card-errors" role="alert"></div>
      </div>
    
      <button>Submit Payment</button>
    </form>
    </div>
  );
};

export default Checkout;
