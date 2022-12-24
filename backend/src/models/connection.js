const mysql = require('mysql2/promise');
require('dotenv/config');

const { DB_USER, DB_PASSWORD, DB_HOST,
    DB_NAME } = process.env; 

    const db = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME
      });
      
      module.exports = { db };
