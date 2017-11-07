import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import App from './App';
import Home from './home';


const Entry = (props) => {
    return (
        <div>
            <Route exact path="/" component={ App } />
            <Route exact path="/home" component={ Home } />
        </div>
  );
};


export default Entry;
