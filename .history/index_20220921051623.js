const express = require('express')
const app = express;
require('./routes.js')(app);
const server = require('http').createServer(app);

