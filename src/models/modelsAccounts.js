const { db } = require('./connection');

const modelsAccounts = {
    getAll: async () => {
      const SQL_GET_ACCOUNTS = 'SELECT * FROM Accounts'; 
      const [[Accounts]] = await db.query(SQL_GET_ACCOUNTS);
      return Accounts;
    },
}

module.exports = { modelsAccounts };