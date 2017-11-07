import React from 'react';
import Entry from './entry';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const Root = ({ }) => (
  
    <HashRouter>
      <Entry />
    </HashRouter>
);

export default Root;
