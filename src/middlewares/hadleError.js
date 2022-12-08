const Joi = require('joi');
const { httpstatuscode } = require('../utils/httpstatuscode');

const knowErros = {
    ACCOUNT_NOT_EXIST: { code: `${httpstatuscode.NOT_FOUND}`, message: "A conta informada não existe" },
    USER_NOT_EXIST: { code: `${httpstatuscode.NOT_FOUND}`, message: "O Usuario informado não existe" },
    USER_NOT_HAVE_ACCOUNT: { code: `${httpstatuscode.NOT_FOUND}`, message: "Restaurant not have products" }
};

/** @type {import('express').ErrorRequestHandler} */
const hadleError = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    const [code, message] = err.message.split('|')
    return res.status(Number(code)).json({ message: `${message}` });
  }

  const error = knowErros[err];
  if (error) return res.status(error.code).json({ message: `${error.message}` });
  return res.status(500).json({ message: "Internal Server Error" });
}

module.exports = { hadleError };
