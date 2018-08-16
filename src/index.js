import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/papercss/dist/paper.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
