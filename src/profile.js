import React, { Component } from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navBar';

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// For Menu items  
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// try to put Dialog later
const styles = {
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
};

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
          <div>
            <Paper style={styles}>
              <Menu>
                <MenuItem primaryText="My Profile" />
                <MenuItem primaryText="Orders" />
                <MenuItem primaryText="Donate History" />
                <MenuItem primaryText="Payment method" />
              </Menu>
            </Paper>
          </div>
          
          <div>
            <Paper style={styles} zDepth={1}>
              <h3>My profile</h3>
              <div>Account Info</div>
              <ul>
                 <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                 <li>Aliquam tincidunt mauris eu risus.</li>
                 <li>Vestibulum auctor dapibus neque.</li>
              </ul>
            </Paper>
            
            <Card>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Profile;
