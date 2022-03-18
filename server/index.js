const express = require("express");
const app = express();
// const path = require("path");
const port = 3000;
const axios = require("axios");

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('meow');
})