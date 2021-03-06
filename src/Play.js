import React, { Component } from 'react';
import './App.css';
import Home from './home.js';
import firebase, { auth, provider } from './firebase.js';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null // <-- add this line
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
    title: this.state.currentItem,
    user: this.state.user.displayName || this.state.user.email
  };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}
  login() {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
      this.setState({ user });
    }
  });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  addCart(itemId){
    //create ref or get that location in firebase
    const cartRef = firebase.database().ref(`/cart/${this.state.user.displayName}`);
    //push item ID(going to have to iterate through cart getting item IDs
    // and then getting them from items json object and displaying information)
    cartRef.push(itemId);
    //tell user its been added to cart
    window.alert('added to cart');
  }
  render() {
    let item_s = this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>brought by: {item.user}
                          <button className='remove-button' onClick={() => this.removeItem(item.id)}>Remove Item</button>
                          <button className='add-to-cart' onClick={() => this.addCart(item.id)}>Add to Cart</button>
                        </p>
                      </li>
                    );
                  });
  return (
  <div className='app'>
    <header>
      <div className="wrapper">
      <h1>Closet Share</h1>
      {this.state.user ?
        <button onClick={this.logout}>Logout</button>
        :
        <button onClick={this.login}>Log In</button>
      }
      </div>
    </header>
  {this.state.user ?
    <div>
    <ul>{ item_s }</ul>
      <div className='user-profile'>
        <img src={this.state.user.photoURL} alt='bad' />
      </div>
     <div className='container'>
    <section className='add-item'>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
        <input type="text" name="currentItem" placeholder="What are Selling?" onChange={this.handleChange} value={this.state.currentItem} />
        <button>Add Item</button>
      </form>
    </section>
  </div>
    </div>
    :
    <div className='wrapper'>
      <p>You must be logged in to see the list and submit to it.</p>
    </div>
  }

</div>
      );
   }


}
export default Play;
