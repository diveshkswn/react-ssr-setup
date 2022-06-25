import React from 'react';
import ReactDom from 'react-dom';
import App from '../shared/App';

ReactDom.hydrate(<React.StrictMode><App serverData={window.INITIAL_DATA} /></React.StrictMode>, document.getElementById('root'));
