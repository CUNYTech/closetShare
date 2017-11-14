import React, { Component } from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import NavBar from './navBar';

class Profile extends Component {
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
  render() {
    return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />

        <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>
      </div>

    );
  }
}

export default Profile;
