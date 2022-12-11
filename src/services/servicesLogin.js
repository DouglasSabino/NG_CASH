const { modelsLogin } = require('../models/modelsLogin');

const serviceslogin = {
  login: async (body) => {
    const user = await modelsLogin.login(body);
    return user;
  },
};

module.exports = { serviceslogin };

