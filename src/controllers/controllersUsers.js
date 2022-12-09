const { servicesUsers } = require('../services/servicesUsers');
const { httpstatuscode } = require('../utils/httpstatuscode');
const { schemaRegistration } = require('../utils/validationsJoi/registrationLogin');

const controllersUsers = {
  /** @type {import('express').RequestParamHandler} */  
  register: async (req, res, next) => {
    try {
      await schemaRegistration.validationRegistration(req.body);
      await servicesUsers.register(req.body);
      return res.status(httpstatuscode.OK).json('Usuario Registrado :)');
    } catch (error) {
      if (error.sqlMessage) {
        if (error.sqlMessage.includes('Duplicate')) {
          next('DUPLICATE_USER');
        }
      }
      next(error);
    }
  }
};

module.exports = { controllersUsers };