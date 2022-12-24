const { servicesAccounts } = require('../services/servicesAccounts');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersAccounts = {
  /** @type {import('express').RequestParamHandler} */
  getAccount: async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    if (req.user.accountId !== id) return next('NOT_AUTHORIZED');
    try {
      const accounts = await servicesAccounts.getAccount(id);
      return res.status(httpstatuscode.OK).json(accounts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { controllersAccounts };
