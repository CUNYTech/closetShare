import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {},
            user: null // <-- add this line
          }  
    this.check_button = this.check_button.bind(this); 
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
          this.setState({ user });
        } 
      });
      const productsRef = firebase.database().ref(`/products/${this.props.match.params.id}`);
      productsRef.on('value', (snapshot) => {
         this.setState({
             product: snapshot.val()
         }) 
        });
      }
      check_button() {
      if (this.state.user){
        if (this.state.user.uid === this.state.product.user_id){
            return ( <button>oh shit</button>
            );
        } 
     }
    }

    render(){
        console.log(this.state.user);
        return(
        <div>
            <h1>Product Details</h1>
            <ul>
            <li key={this.state.product.id}>
            <h3>{this.state.product.productTitle}</h3>
            <p>Image Here</p>
            <p>Price: {this.state.product.price}</p>
            <p>Product Description: {this.state.product.description}</p>
            <p>Created by: {this.state.product.user_name}</p>
            <p>{this.check_button()}</p>
          </li>
            </ul>
        </div>
        );
    }
};

export default ProductDetail;