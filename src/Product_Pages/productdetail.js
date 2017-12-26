import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Entry from '../entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

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
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
             product: snapshot.val(),
             productTitle: snapshot.val().productTitle,
             description: snapshot.val().description,
             price: snapshot.val().price,
             user_id: snapshot.val().user_id,
             user_name:snapshot.val().user_name
         }) 
        });
      }

      delete_record(){
        var confirm = window.confirm("Are you sure you would like to delete this record?")
        if(confirm){
            const productsRef = firebase.database().ref(`/products/${this.state.product_id}`);
            productsRef.remove();
            alert("deleted");
            this.props.history.replace('/#');
        }else{
            alert("Canceled");
        }
      }
      handleChange(e) {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        });
      }


      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
      
      edit_record(){
          const productsRef = firebase.database().ref(`products/${this.state.product_id}`);
          const product = {
          productTitle: this.state.productTitle,
          description: this.state.description,
          price: this.state.price,
          user_id: this.state.user_id,
          user_name: this.state.user_name
          }
          productsRef.set(product);
          this.handleClose();
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
                        <RaisedButton primary={true} onClick={this.handleOpen}>Edit</RaisedButton>
                            <Dialog
                                title="Edit Product"
                                actions={actions}
                                modal={true}
                                open={this.state.open}
                            >
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
                            </form>
                            </Dialog>
                        <RaisedButton backgroundColor="#D32F2F" onClick={this.delete_record}>Delete</RaisedButton>
                    </div>
                </div>
            );
        } 
     }
    }

    render(){
        
        return(
        <div>
            <div className="col-md-9" >
                <h2>Product Details</h2>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
                <div className="col-md-9">
                    <Card >
                    <CardMedia
                      overlay={<CardTitle title={this.state.product.productTitle} />}
                    >
                      <img src="images/nature-600-337.jpg" alt="" />
                    </CardMedia>
                    <CardTitle>
                    {this.state.product.productTitle}
                    </CardTitle>
                    <CardText>
                    <p>Price: {this.state.product.price}</p>
                    <p>Product Description: {this.state.product.description}</p>
                    <p>Created by: {this.state.product.user_name}</p>
                    </CardText>
                    <CardActions>
                    <div>{this.check_button()}</div>
                    </CardActions>
                  </Card>
                  </div>
        </div>
        );
    }
};

export default ProductDetail;