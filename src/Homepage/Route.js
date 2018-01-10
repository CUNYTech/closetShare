import React from 'react';
import {Route, Link} from 'react-router';
import Homepage from './homepage';
import App from './App';

const Routes = (props) =>{
return(
  <div>
   <Route path= "/" component={App}>
   <Route path= "homepage" component={Homepage}/>
   </Route>
</div>
);
}

export default Routes;

