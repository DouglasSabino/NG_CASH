const { modelsUsers } = require('../models/modelsUsers');

const servicesUsers = {
  register: async (body) => {
    await modelsUsers.register(body);
  }
};

module.exports = { servicesUsers };
