import React from 'react';
import ReactDom from 'react-dom/server';
import App from '../shared/App';
import serialize from "serialize-javascript"
const data = {
  name : "Divesh",
  age : 25,
}
const markup = ReactDom.renderToString(<App serverData={data} />);

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
    <script>
    window.INITIAL_DATA = ${serialize(data)}
    </script>
</head>
<body>

<!-- SSR with ReactDom.renderToString() in below div -->
    <div id="root">${markup}</div> 
</body>
</html>
    `;
}

export { renderer };
