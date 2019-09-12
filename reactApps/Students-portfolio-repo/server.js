const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentsRoutes = require('./services/students');
const projectsRouter = require('./services/projects');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/students', studentsRoutes);
server.use('/projects', projectsRouter);

server.listen(3550, () => console.log(`Example app listening on port 3550!`));