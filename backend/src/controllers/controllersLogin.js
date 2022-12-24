const { serviceslogin } = require('../services/servicesLogin');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersLogin = {
  /** @type {import('express').RequestParamHandler} */
  login: async (req, res, _next) => {
    const [user, token] = await serviceslogin.login(req.body);
    console.log(token);
    if (user.length !== 0) {
      if (user[0].auth) return res.status(httpstatuscode.OK).json({message: 'Login efetuado !'});
      else return res.status(httpstatuscode.BAD_REQUEST).json({message: 'Acesso negado'});
    }
    return res.status(httpstatuscode.BAD_REQUEST).json({message: 'Usuario inexistente'});
  },
};

module.exports = { controllersLogin };