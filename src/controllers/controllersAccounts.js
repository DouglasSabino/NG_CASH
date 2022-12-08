const { servicesAccounts } = require('../services/servicesAccounts');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersAccounts = {
  /**
   * @type {import('express').RequestParamHandler} 
   */
  getAll: async (_req, res, next) => {
    try {
      const accounts = await servicesAccounts.getAll()
      return res.status(httpstatuscode.OK).json(accounts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { controllersAccounts };
