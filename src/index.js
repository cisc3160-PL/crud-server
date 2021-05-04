require('dotenv').config();
const express = require('express');
const { postCampus } = require('./controllers/campus');
const buildCallback = require('./express-callback');

const apiRoot = process.env.API_ROOT || '/api';
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.get('/', (req, res) => res.send('CRUD Microservice Server'));

// Campus routes
server.post(`${apiRoot}/campuses`, buildCallback(postCampus));

module.exports = server;