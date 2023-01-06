const { modelsTransactions } = require('../models/modelsTransactions');
const { makeToken } = require('../utils/makeTokenJwt');

const servicesTransactions = {
  getAllByUser: async (Auth) => {
    const user = makeToken.decoder(Auth);
    const extract = await modelsTransactions.getAllByUser(user.payload);
    return extract;
  },
  cashout: async (debitedAccount, creditedAccount, value) => {
    await modelsTransactions.cashout(debitedAccount, creditedAccount, value);
  },
  transactions: async (body, loggedUser) => {
    const [user, loggedAccount] = await modelsTransactions.transactions(body, loggedUser);
    return [user, loggedAccount];
  },
  registerTransictions: async (loggedUser,restofUserToCredit, balance) => {
    await modelsTransactions.registerTransictions(loggedUser,restofUserToCredit, balance);
  },
  findBy: async (date, operation, loggedUser) => {
    if (!operation) {
      const bankStatement = await modelsTransactions.findByDate(date);
      return bankStatement;
    }else if (!date) {
      const bankStatement = await modelsTransactions.findByOperation(operation, loggedUser);
      return bankStatement;
    }else {
      const bankStatement = await modelsTransactions.findByOperationAndDate(date, operation, loggedUser);
      return bankStatement;
    }
  },
};

module.exports = { servicesTransactions };
