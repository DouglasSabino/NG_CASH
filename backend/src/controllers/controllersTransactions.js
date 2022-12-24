const { servicesTransactions } = require('../services/servicesTransactions');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersTransactions = { 
  /** @type {import('express').RequestParamHandler} */
  transactions: async (req, res, next) => {
    try {
      const { balance } = req.body;
      const { user: loggedUser } = req;
      const [reciveUser, loggedAccount] = await servicesTransactions.transactions(req.body, loggedUser);
      const [{ password, salt, ...restofUserToCredit }] = reciveUser;
      if (loggedUser.username === restofUserToCredit.username) return next('UNATUTHORIZED_TRANSACTION') 
      if (reciveUser.length < 1) return next('ACCOUNT_NOT_EXIST');
      if (Number(loggedAccount[0].balance) < Number(balance)) return next('INSUFFICIENT_BALANCE');
      await servicesTransactions.cashout(loggedUser, restofUserToCredit, balance);
      await servicesTransactions.registerTransictions(loggedUser,restofUserToCredit, balance);
      console.log(restofUserToCredit);
      if (reciveUser.length !== 0) return res.status(httpstatuscode.OK).json(`Transferência para ${restofUserToCredit.username} realizada com sucesso !!`); 
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  findBy: async (req, res, _next) => {
    try {
      const { date, operation } = req.body;
      const bankStatement = await servicesTransactions.findBy(date, operation, req.user);
      return res.status(httpstatuscode.OK).json(bankStatement);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { controllersTransactions };
