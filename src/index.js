require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const apiRoot = process.env.API_ROOT || '/api';
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get('/', (req, res) => res.send('CRUD Microservice Server'));
server.use(apiRoot, routes);

module.exports = server;