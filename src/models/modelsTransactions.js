const { modelsLogin } = require('./modelsLogin');
const { modelsUsers } = require('./modelsUsers');
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
};

module.exports = { modelsTransactions };
