const express = require('express');
const admin = require('./admin.js');
const app = express;
app.use(express.json());
require('./routes.js')(app);
const server = require('http').createServer(app);