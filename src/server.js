const { routerAccount } = require('./routers/routersAccounts');
// const handleError = require('./middlewares/hadleError');
const express = require('express');
require('dotenv/config');

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.use('/accounts', routerAccount);
// app.use(handleError);

app.listen(PORT, () => console.log(`Listen port ${PORT}`));