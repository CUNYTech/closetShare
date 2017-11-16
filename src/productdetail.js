import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';

class ProductDetail extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>Yay i didnt break</h1>
        );
    }
};

export default ProductDetail;