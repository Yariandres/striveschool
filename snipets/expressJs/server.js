const express = require('express');
const listRoutes = require('express-list-endpoints');
const bodyParser = require('body-parser');

const userRoutes = require('./services/users');
const bookRoutes = require('./services/books');

const server = express();

console.log('Before mounting');

server.use('/users', userRoutes);
server.use('/book', bookRoutes);

console.log(listRoutes(server));

server.listen(3000, () => {
  console.log('Server running on port 3000');
});