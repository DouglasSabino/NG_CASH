const { modelsAccounts } = require('./modelsAccounts');
const { db } = require('./connection');
const cuid = require('cuid');

const modelsUsers = {
  register: async (body) => {
    const { username, password } = body;
    const SQL_REGISTER_ACCOUNT = 'INSERT INTO Users (id, username, password, accountId) VALUES(?,?,?,?)';
    const AccountId = await modelsAccounts.createAccount();
    await db.query(SQL_REGISTER_ACCOUNT, [cuid(), username, password, AccountId]);
  }
};

module.exports = { modelsUsers };
