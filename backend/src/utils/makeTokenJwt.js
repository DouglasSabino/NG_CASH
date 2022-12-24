const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const makeToken = {
    coder: (payload) => {
        const token = jwt.sign({ payload }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
        return token;
    },
    decoder: (token) => {
       const decoded = jwt.verify(token, JWT_SECRET);
       return decoded;
    },
};

module.exports = { makeToken };