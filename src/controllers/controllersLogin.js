const { serviceslogin } = require('../services/servicesLogin');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersLogin = {
  /** @type {import('express').RequestParamHandler} */
  login: async (req, res, _next) => {
    const user = await serviceslogin.login(req.body);
    if (user.length !== 0) return res.status(httpstatuscode.OK).json('O Usuario Existe :)');
    return res.status(httpstatuscode.BAD_REQUEST).json('O Usuario Não Existe :(');
  },
};

module.exports = { controllersLogin };