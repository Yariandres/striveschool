const express = require('express');
const listRoutes = require('express-list-endpoints');
const bodyParser = require('body-parser');

const usersRoutes = require('./services/users');
const booksRoutes = require('./services/books');

const server = express();

server.use(bodyParser.json());

console.log('Before mounting');

server.use('/users', usersRoutes);
server.use('/books', booksRoutes);

console.log(listRoutes(server));

server.listen(3000, () => {
  console.log('Server running on port 3000');
});