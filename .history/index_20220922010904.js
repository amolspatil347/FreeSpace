const express = require('express');
const admin = require('./admin');
const app = express;
app.use(express.json());
require('./routes.js')(app);
const server = require('http').createServer(app);