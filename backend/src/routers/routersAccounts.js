const { controllersAccounts } = require('../controllers/controllersAccounts');
const { handlerTokenValidation } = require('../middlewares/handleTokenValidation');
const express = require('express');

const routerAccount = express.Router();

routerAccount.get('/:id', handlerTokenValidation, controllersAccounts.getAccount)

module.exports = { routerAccount }
