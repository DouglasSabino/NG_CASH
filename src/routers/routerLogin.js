const { controllersLogin } = require('../controllers/controllersLogin');
const express = require('express');

const routerLogin = express.Router();

routerLogin.post('/', controllersLogin.login);

module.exports = { routerLogin }