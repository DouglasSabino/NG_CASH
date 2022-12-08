const { servicesUsers } = require('../services/servicesUsers');
const { httpstatuscode } = require('../utils/httpstatuscode');

const controllersUsers = {
  /** @type {import('express').RequestParamHandler} */  
  register: async (req, res, next) => {
    try {
      await servicesUsers.register(req.body);
      return res.status(httpstatuscode.OK).json('Usuario Registrado :)');
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { controllersUsers };