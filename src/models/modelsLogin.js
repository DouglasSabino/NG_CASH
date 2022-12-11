const bcrypy = require('bcrypt');
const { db } = require('./connection');

const modelsLogin = {
  verifyIfUserExist: async (username) => {
    const SQL_GET_USER = 'SELECT * FROM Users WHERE username=?';
    const [user] = await db.query(SQL_GET_USER, [username]);
    return user;
  },
  verifyPassword: async (password, salt, hash) => {
    if (bcrypy.hashSync(password, salt) === hash) return true;
    return false; 
  },
  login: async (body) => {
    const { username, password } = body;
    const user = await modelsLogin.verifyIfUserExist(username);
    if (user.length !== 0) {
      const auth = await modelsLogin.verifyPassword(password,user[0].salt, user[0].password);
      if(auth) user[0].auth = true;
      else user[0].auth = false;
    }
    return user;    
  },
};

module.exports = { modelsLogin };
