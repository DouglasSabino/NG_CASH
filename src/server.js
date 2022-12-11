const { routerAccount } = require('./routers/routersAccounts');
const { routerUsers } = require('./routers/routerUsers');
const { routerLogin } = require('./routers/routerLogin');
const { middlewareError } = require('./middlewares/hadleError');
const express = require('express');
require('dotenv/config');

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.use('/accounts', routerAccount);
app.use('/register', routerUsers);
app.use('/login', routerLogin);
app.use(middlewareError);

app.listen(PORT, () => console.log(`Listen port ${PORT}`));