import React, { Component } from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navBar';


class Root extends Component{
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return(
  <MuiThemeProvider>
  <NavBar
  onToggle={() => this.handleToggle()}
  open={this.state.open}
  />
    <HashRouter>
      <Entry />
    </HashRouter>
  </MuiThemeProvider>
    )
  }
};

export default Root;