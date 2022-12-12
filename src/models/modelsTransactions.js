const { db } = require('./connection'); 

const modelsTransactions = {
  transactions: async (body) => {
    const { userToReceive, balance } = body;
  },
};

module.exports = { modelsTransactions };
