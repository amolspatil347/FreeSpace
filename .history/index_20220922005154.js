const express = require('express');
const User = require('./config');
const app = express;
app.use(express.json());
require('./routes.js')(app);
const server = require('http').createServer(app);