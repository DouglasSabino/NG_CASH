const { controllersTransactions } = require('../controllers/controllersTransactions');
const { handlerTokenValidation } = require('../middlewares/handleTokenValidation');

const express = require('express');

const routerTransactions = express.Router();

routerTransactions.post('/', handlerTokenValidation, controllersTransactions.transactions);

module.exports = { routerTransactions };
