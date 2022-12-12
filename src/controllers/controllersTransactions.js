const { servicesTransactions } = require('../services/servicesTransactions');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersTransactions = { 
  /** @type {import('express').RequestParamHandler} */
  transactions: async (req, res, next) => {
    try {
      const { balance } = req.body;
      const { user: loggedUser } = req;
      const [reciveUser, loggedAccount] = await servicesTransactions.transactions(req.body, loggedUser);
      if (Number(loggedAccount[0].balance) < Number(balance)) {
        return res.status(httpstatuscode.BAD_REQUEST).json("Saldo insuficiente para transferência");
      }
      if (reciveUser.length !== 0) return res.status(httpstatuscode.OK).json('existe'); 
      return res.status(httpstatuscode.OK).json(user);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = { controllersTransactions };

