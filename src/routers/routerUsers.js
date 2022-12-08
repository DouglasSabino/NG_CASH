const { controllersUsers } = require('../controllers/controllersUsers');
const express = require('express');

const routerUsers = express.Router();

routerUsers.post('/', controllersUsers.register);

module.exports = { routerUsers }