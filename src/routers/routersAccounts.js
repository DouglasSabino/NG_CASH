const { controllersAccounts } = require('../controllers/controllersAccounts');
const express = require('express');

const routerAccount = express.Router();

routerAccount.get('/', controllersAccounts.getAll)

module.exports = { routerAccount }
