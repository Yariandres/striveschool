const express = require('express');
const listRoutes = require('express-list-endpoints');
const bodyParser = require('body-parser');

const studentsRoutes = require('./services/students');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('Before mounting');

app.use('/students', studentsRoutes);

console.log(listRoutes(app));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));