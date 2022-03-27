const express = require('express');
const app = express();
const axios = require('axios');
const db = require('../database/index.js');
const path = require('path');
const port = 3000;

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static('dist'));

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  // console.log('START HERE', res);
  res.send('moooooooon');
});

// do you want to use async await?
app.get('/horoscope', (req, res) => {
  res.send('hi chi');
});

module.exports = app;