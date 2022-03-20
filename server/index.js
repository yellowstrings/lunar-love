const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const axios = require('axios');

app.use(express.json());

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  // console.log('START HERE', res);
  res.send('moooooooon');
});


module.exports = app;