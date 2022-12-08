const { servicesAccounts } = require('../services/servicesAccounts');

const controllersAccounts = {
  /**
   * @type {import('express').RequestParamHandler} 
   */
  getAll: async (_req, res) => {
    try {
      const accounts = await servicesAccounts.getAll()
      return res.status(200).json(accounts);
    } catch (error) {
      console.log(error.message);  
    }
  }
}

module.exports = { controllersAccounts };
