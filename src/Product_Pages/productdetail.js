import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            productTitle: '',
            description: '',
            price: '',
            user_id: '',
            user_name:'',
            product: {},
            user: null, // <-- add this line
            product_id: this.props.match.params.id
          }  
    this.check_button = this.check_button.bind(this); 
    this.delete_record = this.delete_record.bind(this);
    this.edit_record = this.edit_record.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
          this.setState({ user });
        } 
      });
      const productsRef = firebase.database().ref(`/products/${this.state.product_id}`);
      productsRef.on('value', (snapshot) => {
         this.setState({
             product: snapshot.val()
         }) 
        });
      }

      delete_record(){
        var confirm = window.confirm("Are you sure you would like to delete this record?")
        if(confirm){
            const productsRef = firebase.database().ref(`/products/${this.state.product_id}`);
            productsRef.remove();
            alert("Deleted");
        }else{
            alert("Okay");
        }
      }

      handleSubmit(e) {
        e.preventDefault();
        const productsRef = firebase.database().ref(`products/${this.state.product_id}`);
        const product = {
        productTitle: this.state.productTitle,
        description: this.state.description,
        price: this.state.price,
        user_id: this.state.user.uid,
        user_name: this.state.user.displayName
        }
        productsRef.set(product);
        this.setState({
          productTitle: '',
          description: '',
          price: '',
          user_id: '',
          user_name: '',
          open: false
        });
      }
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
      edit_record(){
          return(
              console.log("hello")
          );
      }

      check_button() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.edit_record}
            />,
          ];
      if (this.state.user){
        if (this.state.user.uid === this.state.product.user_id){
            return ( 
                <div>
                    <div>
                        <RaisedButton onClick={this.handleOpen}>Edit</RaisedButton>
                            <Dialog
                                title="Edit Product"
                                actions={actions}
                                modal={true}
                                open={this.state.open}
                            >
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <TextField
                                    id="productTitle"
                                    value={this.state.productTitle}
                                    onChange={this.handleChange}
                                    floatingLabelText="Product Title"
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                    id="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    floatingLabelText="Product Description"
                                  />
                                </div>
                                <div className="form-group">
                                    <TextField
                                    id="Price"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    floatingLabelText="Product Price"
                                    />
                                </div>
                            </form>
                            </Dialog>
                        <RaisedButton onClick={this.delete_record}>Delete</RaisedButton>
                    </div>
                </div>
            );
        } 
     }
    }

    render(){
        
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
                        <div>{this.check_button()}</div>
                    </li>
                 </ul>
        </div>
        );
    }
};

export default ProductDetail;