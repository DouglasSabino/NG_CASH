const { modelsTransactions } = require('../models/modelsTransactions');

const servicesTransactions = {
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
    }else {
      const bankStatement = await modelsTransactions.findByDateAndOperation(date, operation, loggedUser);
      return bankStatement;
    }
  },
};

module.exports = { servicesTransactions };
