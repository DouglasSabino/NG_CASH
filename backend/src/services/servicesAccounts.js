const { modelsAccounts } = require('../models/modelsAccounts');

const servicesAccounts = {
  getAccount: async (id) => {
    const accounts = await modelsAccounts.getAccount(id);
    return accounts;
  },
};

module.exports = { servicesAccounts }