const { servicesTransactions } = require('../services/servicesTransactions');
const { httpstatuscode } = require('../utils/httpstatuscode');
const { makeToken } = require('../utils/makeTokenJwt');

const controllersTransactions = { 
  /** @type {import('express').RequestParamHandler} */
  getAllByUser: async (req, res, next) => {
    const { authorization } = req.headers;
    const extract = await servicesTransactions.getAllByUser(authorization);
    return res.status(httpstatuscode.OK).json(extract);
  },
  /** @type {import('express').RequestParamHandler} */
  transactions: async (req, res, next) => {
    try {
      const { balance } = req.body;
      const { authorization: token } = req.headers;
      const loggedUser = makeToken.decoder(token);
      const [reciveUser, loggedAccount] = await servicesTransactions.transactions(req.body, loggedUser.payload);
      const [{ ...restofUserToCredit }] = reciveUser;
      if (loggedUser.payload.username === restofUserToCredit.username) return next('UNATUTHORIZED_TRANSACTION') 
      if (reciveUser.length < 1) return next('ACCOUNT_NOT_EXIST');
      if (Number(loggedAccount[0].balance) < Number(balance)) return next('INSUFFICIENT_BALANCE');
      await servicesTransactions.cashout(loggedUser.payload, restofUserToCredit, balance);
      await servicesTransactions.registerTransictions(loggedUser.payload,restofUserToCredit, balance);
      if (reciveUser.length !== 0) return res.status(httpstatuscode.OK).json(`Transferência para ${restofUserToCredit.username} realizada com sucesso !!`); 
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  /** @type {import('express').RequestParamHandler} */
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

