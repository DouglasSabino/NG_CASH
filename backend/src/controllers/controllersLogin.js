const { serviceslogin } = require('../services/servicesLogin');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersLogin = {
  /** @type {import('express').RequestParamHandler} */
  login: async (req, res, _next) => {
    const [user, token] = await serviceslogin.login(req.body);
    if (user.length !== 0) {
      console.log(user[0]);
      if (user[0].auth) {
        return res.status(httpstatuscode.OK).json({message: `Ola ${user[0].username} seja bem-vindo+${token}+${user[0].id}+${user[0].username}+${user[0].accountId}}`});
      }
      else return res.status(httpstatuscode.BAD_REQUEST).json({message: 'Acesso negado'});
    }
    return res.status(httpstatuscode.BAD_REQUEST).json({message: 'Usuario Não Encontrado'});
  },
};

module.exports = { controllersLogin };