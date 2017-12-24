import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = ({ }) => (
  <MuiThemeProvider>
    <HashRouter>
      <Entry />
    </HashRouter>
  </MuiThemeProvider>
);

export default Root;
