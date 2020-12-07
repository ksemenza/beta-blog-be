const express = require('express');
const PORT = process.env.PORT || 8080;
const server = require('./api/server.js');

server.use('/', (req, res) => {
  res.send(`********** MATRIX BASE URL ON PORT ${PORT} **********`)
})

server.listen(PORT, () => {
  console.log(`<~~~~~ MATRIX LISTENING ON ${PORT} ~~~~~~>`);
});