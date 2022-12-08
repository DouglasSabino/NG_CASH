const { db } = require('./connection');
const cuid = require('cuid');

const modelsAccounts = {
    getAll: async () => {
      const SQL_GET_ACCOUNTS = 'SELECT * FROM Accounts'; 
      const [Accounts] = await db.query(SQL_GET_ACCOUNTS);
      return Accounts;
    },
    createAccount: async () => {
      const SQL_CREATE_ACCOUNT = 'INSERT INTO Accounts (id, balance) VALUES (?,?)';
      const id = cuid();
      await db.query(SQL_CREATE_ACCOUNT, [id, 100]);
      return id;
    },
}

module.exports = { modelsAccounts };