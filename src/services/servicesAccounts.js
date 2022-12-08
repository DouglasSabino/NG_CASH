const { modelsAccounts } = require('../models/modelsAccounts');

const servicesAccounts = {
  getAll: async () => {
    const accounts = await modelsAccounts.getAll();
    return accounts;
  },
};

module.exports = { servicesAccounts }