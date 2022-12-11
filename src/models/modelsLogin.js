const { db } = require('./connection');

const modelsLogin = {
  verifyIfUserExist: async (username) => {
    const SQL_GET_USER = 'SELECT * FROM Users WHERE username=?';
    const [user] = await db.query(SQL_GET_USER, [username]);
    return user;
  },
  login: async (body) => {
    const { username } = body;
    const user = await modelsLogin.verifyIfUserExist(username);
    return user;    
  },
};

module.exports = { modelsLogin };
