const { servicesAccounts } = require('../services/servicesAccounts');
const { httpstatuscode } = require('../utils/httpstatuscode');
const { makeToken } = require('../utils/makeTokenJwt');

const controllersAccounts = {
  /** @type {import('express').RequestParamHandler} */
  getAccount: async (req, res, next) => {
    const { authorization: user } = req.headers;
    const u = makeToken.decoder(user);
    const { payload } = u;
    console.log(payload);
    const { id } = req.params;
    const fixedId = id.slice(0, id.length - 1);
    console.log(fixedId);
    if (payload.accountId !== fixedId) return next('NOT_AUTHORIZED');
    try {
      const account = await servicesAccounts.getAccount(fixedId);
      return res.status(httpstatuscode.OK).json(account);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { controllersAccounts };
