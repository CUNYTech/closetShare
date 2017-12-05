import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productTitle: '',
          description: '',
          price: '',
          user_id: '',
          user_name:'',
          products: [],
          user: null // <-- add this line
        }    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit(e) {
        e.preventDefault();
        const productsRef = firebase.database().ref('products');
        const product = {
        productTitle: this.state.productTitle,
        description: this.state.description,
        price: this.state.price,
        user_id: this.state.user.uid,
        user_name: this.state.user.displayName
        }
        productsRef.push(product);
        this.setState({
          productTitle: '',
          description: '',
          price: '',
          user_id: '',
          user_name: ''
        });
      }
    
      componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
          this.setState({ user });
          this.setState({user_id: user.uid});
        } 
      });
        const productsRef = firebase.database().ref('products');
        productsRef.on('value', (snapshot) => {
          let products = snapshot.val();
          let newState = [];
          for (let product in products) {
            newState.push({
              id: product,
              productTitle: products[product].productTitle,
              description: products[product].description,
              price: products[product].price,
              user_id : products[product].user_id,
              user_name : products[product].displayName
            });
          }
          this.setState({
            products: newState
          });
        });
      }

render(){
    return (
    <div className="Main">
      <h1>
      Product page create
      </h1>
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label for="productTitle">Product Title</label>
                <input type="text" name="productTitle" className="form-control" id="productTitle" placeholder="Product Title" onChange={this.handleChange} value={this.state.productTitle}/>
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" className="form-control" id="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
            </div>
            <div className="form-group">
            <label for="price">Price</label>
            <input type="text" name="price" className="form-control" id="Price" placeholder="Price" onChange={this.handleChange} value={this.state.price}/>
        </div>
            <div className="form-group">
                <label for="Images">Product Image</label>
                <input type="file" name="images" id="images"/>
                <p className="help-block">Upload product images here in order of appearance</p>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
      
    );
    }
};
  
  
  export default ProductCreate;