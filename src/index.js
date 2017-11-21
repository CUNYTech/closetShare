import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//make click events enable to use 
injectTapEventPlugin();

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
