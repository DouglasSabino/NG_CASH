const { modelsAccounts } = require('./modelsAccounts');
const { db } = require('./connection');
const bcrypt = require('bcrypt');
const cuid = require('cuid');

const modelsUsers = {
  verifyBalance: async (loggedUser) => {
    const SQL_GET_LOGGEDUSER_ACCOUNT = 'SELECT * FROM Accounts WHERE id=?';
    const [loggedAccount] = await db.query(SQL_GET_LOGGEDUSER_ACCOUNT, [loggedUser.accountId]);
    return loggedAccount;
  },
  register: async (body) => {
    const salt = bcrypt.genSaltSync(10);
    const { username, password } = body;
    const hashedPassword = bcrypt.hashSync(password, salt);
    const SQL_REGISTER_ACCOUNT = 'INSERT INTO Users (id, username, password, accountId, salt) VALUES(?,?,?,?,?)';
    const AccountId = await modelsAccounts.createAccount();
    try {
      await db.query(SQL_REGISTER_ACCOUNT, [cuid(), username, hashedPassword, AccountId, salt]);
    } catch (error) {
      await modelsAccounts.deleteAccount(AccountId);
      return error;
    }
  },
};

module.exports = { modelsUsers };
