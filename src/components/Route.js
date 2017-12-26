import React from 'react';
import {Route, Link} from 'react-router';
import Header from './header';
import Homepage from './homepage';
import Footer from './footer';
import App from './App';

const Routes = (props) =>{
return(
  <div>
   <Route path= "/" component={App}>
   <Route path= "header" component={Header}/>
   <Route path= "homepage" component={Homepage}/>
   <Route path= "footer" component={Footer}/>
   </Route>
</div>
);
}

export default Routes;

