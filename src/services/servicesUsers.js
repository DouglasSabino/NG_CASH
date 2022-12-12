const { modelsUsers } = require('../models/modelsUsers');

const servicesUsers = {
  register: async (body) => {
    const error = await modelsUsers.register(body);
    return error;
  },
};

module.exports = { servicesUsers };
