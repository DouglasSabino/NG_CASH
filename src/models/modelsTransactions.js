const { modelsLogin } = require('./modelsLogin');
const { modelsUsers } = require('./modelsUsers');
const cuid = require('cuid');
const moment  = require('moment');
const { db } = require('./connection');

const modelsTransactions = {
  transactions: async (body, loggedUser) => {
    const { userToReceive, balance } = body;
    const user = await modelsLogin.verifyIfUserExist(userToReceive); 
    const loggedAccount = await modelsUsers.verifyBalance(loggedUser);
    return [user, loggedAccount];
  },
  cashout: async (debitedAccount, creditedAccount, value) => {
    const SQL_GET_BALANCE = 'SELECT balance FROM Accounts WHERE id=?';
    const [[currentBalance]] = await db.query(SQL_GET_BALANCE, [debitedAccount.accountId]);
    const { balance } = currentBalance;
    const SQL_UPDATE_BALANCE = 'UPDATE Accounts SET balance=? WHERE id=?';
    await db.query(SQL_UPDATE_BALANCE, [balance - value, debitedAccount.accountId]);
    await modelsTransactions.cashIn(creditedAccount, value);
  },
  cashIn: async (creditedAccount, value) => {
    const SQL_GET_BALANCE = 'SELECT balance FROM Accounts WHERE id=?';
    const [[currentBalance]] = await db.query(SQL_GET_BALANCE, [creditedAccount.accountId]);
    const { balance } = currentBalance;
    const SQL_UPDATE_BALANCE = 'UPDATE Accounts SET balance=? WHERE id=?';
    await db.query(SQL_UPDATE_BALANCE, [balance + value, creditedAccount.accountId]);
  },
  registerTransictions: async (loggedUser,restofUserToCredit, balance) => {
    const SQL_REGISTER_TRANSACTION = "INSERT INTO Transactions (id, debitedAccountId, creditedAccountId, value, createdAt) VALUES (?,?,?,?,?)";
    const timestamp = moment(Date.now()).format('YYYY-MM-DD HH:MM:SS');
    await db.query(SQL_REGISTER_TRANSACTION, [cuid(), loggedUser.accountId, restofUserToCredit.accountId, balance, timestamp]);
  },
  findByDate: async (date) => {
    const SQL_GET_TRANSACTIONS = "SELECT * FROM Transactions WHERE createdAt LIKE ?";
    const [bankStatement] = await db.query(SQL_GET_TRANSACTIONS, [date]+'%');
    return bankStatement;
  },
  findByDateAndOperation: async (date, operation, loggedUser) => {
    if (operation === 'cashout') {
      const SQL_GET_TRANSACTIONS = "SELECT * FROM Transactions WHERE debitedAccountId=? ORDER BY createdAt";
      const [bankStatement] = await db.query(SQL_GET_TRANSACTIONS, loggedUser.accountId);
      return bankStatement;
    } else if (operation === 'cashin') {
      const SQL_GET_TRANSACTIONS = "SELECT * FROM Transactions WHERE creditedAccountId=? ORDER BY createdAt";
      const [bankStatement] = await db.query(SQL_GET_TRANSACTIONS, loggedUser.accountId);
      return bankStatement;
    }
  },
};

module.exports = { modelsTransactions };
