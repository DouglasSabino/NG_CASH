const { modelsLogin } = require('./modelsLogin');
const { modelsUsers } = require('./modelsUsers');

const modelsTransactions = {
  transactions: async (body, loggedUser) => {
    const { userToReceive, balance } = body;
    const user = await modelsLogin.verifyIfUserExist(userToReceive); 
    const loggedAccount = await modelsUsers.verifyBalance(loggedUser);
    return [user, loggedAccount];
  },
};

module.exports = { modelsTransactions };
