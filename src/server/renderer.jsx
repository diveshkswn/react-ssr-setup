import React from 'react';
import ReactDom from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../shared/App';

function renderer({ initialData = [] }) {
  // console.log('initialData server ::: ', initialData);
  const markup = ReactDom.renderToString(<App serverData={initialData} />);

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

    <!-- Initial Data script for Client Side -->
    <script>
    window.INITIAL_DATA = ${serialize(initialData)}
    </script>
    <!-- Another way to pass Initial data from server -->
    <script type="application/json" id="__INITIAL_DATA__">
    ${serialize(initialData)}
    </script>
</body>
</html>
    `;
}

// eslint-disable-next-line import/prefer-default-export
export { renderer };
