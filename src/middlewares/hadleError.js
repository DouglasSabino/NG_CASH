const Joi = require('joi');
const { httpstatuscode } = require('../utils/httpstatuscode');

const knowErros = {
    ACCOUNT_NOT_EXIST: { code: `${httpstatuscode.NOT_FOUND}`, message: "A conta informada não existe" },
    USER_NOT_EXIST: { code: `${httpstatuscode.NOT_FOUND}`, message: "O Usuario informado não existe" },
    DUPLICATE_USER: { code: `${httpstatuscode.BAD_REQUEST}`, message: "Usuario já cadastrado, por favor utilize outro username" },
    TOKEN_NOT_FOUND: { code: `${httpstatuscode.NOT_FOUND}`, message: "Token Invalido ou inexistente" },
    NOT_AUTHORIZED: { code: `${httpstatuscode.UNAUTHORIZED}`, message: "Não Autorizado" },
    INSUFFICIENT_BALANCE: { code: `${httpstatuscode.BAD_REQUEST}`, message: "Saldo insuficiente para transferência" }
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if (Joi.isError(err)) {
    const [code, message] = err.message.split('|')
    return res.status(Number(code)).json({ message: `${message}` });
  }

  const error = knowErros[err];
  if (error) return res.status(Number(error.code)).json({ message: `${error.message}` });
  return res.status(httpstatuscode.INTERNAL_SERVER).json({ message: "Internal Server Error" });
}

module.exports = { middlewareError };
