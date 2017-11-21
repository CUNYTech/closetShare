import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

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
        debugger;
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
          debugger;
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
  console.log(this.props);
    debugger;
    return (
    <div className="Main">
      <h1>
      Product page create
      </h1>
      <div>
        <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="productTitle">Product Title</label>
                <input type="text" name="productTitle" class="form-control" id="productTitle" placeholder="Product Title" onChange={this.handleChange} value={this.state.productTitle}/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" class="form-control" id="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
            </div>
            <div class="form-group">
            <label for="price">Price</label>
            <input type="text" name="price" class="form-control" id="Price" placeholder="Price" onChange={this.handleChange} value={this.state.price}/>
        </div>
            <div class="form-group">
                <label for="Images">Product Image</label>
                <input type="file" name="images" id="images"/>
                <p class="help-block">Upload product images here in order of appearance</p>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
      
    );
    }
};
  
  
  export default ProductCreate;