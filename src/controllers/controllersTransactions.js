const { servicesTransactions } = require('../services/servicesTransactions');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersTransactions = { 
  /** @type {import('express').RequestParamHandler} */
  transactions: async (req, res, next) => {
    const { user } = req;
    return res.status(httpstatuscode.OK).json({ user });
  },
};

module.exports = { controllersTransactions };

