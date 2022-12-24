const { modelsLogin } = require('../models/modelsLogin');
const { makeToken } = require('../utils/makeTokenJwt');

const serviceslogin = {
  login: async (body) => {
    const user = await modelsLogin.login(body);
    if (user.length !== 0) {
      const { password, salt, auth, ...rest } = user[0];
      if (user[0].auth) return [user, makeToken.coder(rest)];
    }
    return [user, null];
  },
};

module.exports = { serviceslogin };
