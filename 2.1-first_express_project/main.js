"use strict";

const port = 3000,
  express = require('express'),
  app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
}).listen(port);

console.log(`Server started, listening on port ${port}`);
