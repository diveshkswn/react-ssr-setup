/* eslint-disable max-len */
import React from 'react';
import ReactDom from 'react-dom';
import App from '../shared/App';

let initialServerData = '';
const initialServerDataScript = document.getElementById('__INITIAL_DATA__');
if (initialServerDataScript) {
  initialServerData = JSON.parse(initialServerDataScript.innerHTML);
}

// Another way to pass initial data from server
// ReactDom.hydrate(<React.StrictMode><App serverData={initialServerData} /></React.StrictMode>, document.getElementById('root'));

ReactDom.hydrate(<React.StrictMode><App serverData={window.INITIAL_DATA} /></React.StrictMode>, document.getElementById('root'));
