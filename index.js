const express = require('express');
const PORT = process.env.PORT || 8080;
const server = require('./api/server.js');

server.use('/', (req, res) => {
  res.send(`********** BLOG MATRIX BASE URL ON PORT ${PORT} **********`)
})

server.listen(PORT, () => {
  console.log(`<~~~~~ BLOG MATRIX LISTENING ON ${PORT} ~~~~~~>`);
});