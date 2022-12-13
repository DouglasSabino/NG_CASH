const { modelsTransactions } = require('../models/modelsTransactions');

const servicesTransactions = {
  cashout: async (debitedAccount, creditedAccount, value) => {
    await modelsTransactions.cashout(debitedAccount, creditedAccount, value);
  },
  transactions: async (body, loggedUser) => {
    const [user, loggedAccount] = await modelsTransactions.transactions(body, loggedUser);
    return [user, loggedAccount];
  },
};

module.exports = { servicesTransactions };
