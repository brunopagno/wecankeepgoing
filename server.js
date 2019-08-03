const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();
const basePath = path.join(__dirname, 'dist');

app.use(express.static(basePath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(basePath, 'index.html'));
});

app.listen(port);
