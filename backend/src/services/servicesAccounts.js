const { modelsAccounts } = require('../models/modelsAccounts');

const servicesAccounts = {
  getAccount: async (id) => {
    const account = await modelsAccounts.getAccount(id);
    return account;
  },
};

module.exports = { servicesAccounts }