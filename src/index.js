import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

//make click events enable to use 
injectTapEventPlugin();

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();