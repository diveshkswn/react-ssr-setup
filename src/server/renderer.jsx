import React from 'react';
import ReactDom from 'react-dom/server';
import App from '../shared/App';

const markup = ReactDom.renderToString(<App />);

function renderer() {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/bundle.js" defer></script>
  <link href="/main.css" rel="stylesheet" />
    <title>React SSR App</title>
</head>
<body>

<!-- SSR with ReactDom.renderToString() in below div -->
    <div id="root">${markup}</div> 
</body>
</html>
    `;
}

export { renderer };
