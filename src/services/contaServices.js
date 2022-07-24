const contaModels = require('../models/contaModels');

const getSaldo = async (codCliente) => {
  const salCliente = await contaModels.getSaldo(codCliente);

  return salCliente;
};

const putSaldo = async (codCliente, valor) => {
  const [saldo] = await getSaldo(codCliente);
  
  if (saldo.saldo < valor) return null;

  const saldoAlt = await contaModels.putSaldo(codCliente, valor);

  return saldoAlt;
};

const putDeposito = async (codCliente, valor) => {
  return await contaModels.putDeposito(codCliente, valor);
};

module.exports = {
  getSaldo,
  putSaldo,
  putDeposito,
};