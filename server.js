const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`));
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, `style.css`));
});

app.get('/messages.js', (req, res) => {
  res.sendFile(path.join(__dirname, `messages.js`));
});

app.listen(3000, () => console.log('app listening on port 3000'));
