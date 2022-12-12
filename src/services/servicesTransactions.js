const { modelsTransactions } = require('../models/modelsTransactions');

const servicesTransactions = {
  transactions: async (body, loggedUser) => {
    const [user, loggedAccount] = await modelsTransactions.transactions(body, loggedUser);
    return [user, loggedAccount];
  },
};

module.exports = { servicesTransactions };
